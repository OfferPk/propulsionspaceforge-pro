#!/usr/bin/env python3
"""
PropulsionSpaceForge Pro (v1.0.0) — Automated 10-Point Verification & Boundary Suite
Validates ECSS-E-ST-35-01C and ECSS-E-ST-35C Rev. 1 compliance.
"""
import copy
import sys
from propulsion_cli import (
    PRESETS,
    validate_config,
    solve_delta_v_budget,
    solve_blowdown_and_tank,
    run_ecss_audit,
)


def run_tests() -> int:
    print("=" * 76)
    print("PropulsionSpaceForge Pro — ECSS-E-ST-35-01C Automated Verification Suite")
    print("=" * 76)
    passed = 0
    total = 10

    leo = copy.deepcopy(PRESETS["leo_sso_hydrazine_smallsat"])

    # TEST 01: Multi-Maneuver Delta-V Budget & Tsiolkovsky Rocket Sizing
    b = solve_delta_v_budget(leo)
    assert b["total_margined_delta_v_mps"] > b["total_nominal_delta_v_mps"]
    assert b["initial_wet_mass_kg"] > b["dry_mass_kg"]
    print(f"[TEST 01] Multi-Maneuver Delta-V Sizing (Nom={b['total_nominal_delta_v_mps']}m/s -> Marg={b['total_margined_delta_v_mps']}m/s)... PASS")
    passed += 1

    # TEST 02: Deterministic Maneuver Margin Policy (>= 5.0%)
    det_mnvs = [m for m in b["maneuvers"] if m["type"] == "deterministic"]
    assert all(m["margin_pct"] >= 5.0 for m in det_mnvs)
    print(f"[TEST 02] Deterministic Maneuver Delta-V Margins (Min={min(m['margin_pct'] for m in det_mnvs)}% >= 5%)...... PASS")
    passed += 1

    # TEST 03: Stochastic Orbit Maintenance & CAM Margin Policy (>= 10.0%)
    stoch_mnvs = [m for m in b["maneuvers"] if m["type"] == "stochastic"]
    assert all(m["margin_pct"] >= 10.0 for m in stoch_mnvs)
    print(f"[TEST 03] Stochastic Delta-V Margins (Min={min(m['margin_pct'] for m in stoch_mnvs)}% >= 10%).............. PASS")
    passed += 1

    # TEST 04: Trapped / Residual Unusable Propellant (>= 1.5% loaded mass)
    assert b["trapped_residual_fraction_pct"] >= 1.5
    assert b["trapped_residual_kg"] > 0
    print(f"[TEST 04] Trapped Residual Propellant Allocation ({b['trapped_residual_fraction_pct']}% >= 1.5%)....... PASS")
    passed += 1

    # TEST 05: Positive Usable Propellant Margin Remaining
    assert b["propellant_margin_kg"] >= 0.0
    print(f"[TEST 05] Usable Propellant Balance Remaining (+{b['propellant_margin_kg']} kg margin)............ PASS")
    passed += 1

    # TEST 06: Tank Pressurant Blowdown Ratio Envelope (<= 4.0:1)
    t = solve_blowdown_and_tank(leo, b)
    assert t["actual_blowdown_ratio"] <= 4.0 and t["blowdown_ratio_compliant"] is True
    print(f"[TEST 06] Blowdown Ratio Sizing ({t['actual_blowdown_ratio']}:1 <= 4.0:1)................... PASS")
    passed += 1

    # TEST 07: Minimum Thruster Inlet Feed Pressure Guarantee
    assert t["feed_pressure_compliant"] is True
    assert t["final_tank_pressure_bar"] >= t["min_feed_pressure_bar"]
    print(f"[TEST 07] Minimum Feed Pressure Margin (P_fin={t['final_tank_pressure_bar']}bar >= {t['min_feed_pressure_bar']}bar).... PASS")
    passed += 1

    # TEST 08: Propellant Tank Loading Capacity & Minimum Initial Ullage (>= 5%)
    assert t["tank_capacity_compliant"] is True
    assert t["initial_ullage_fraction_pct"] >= 5.0
    print(f"[TEST 08] Tank Loading Capacity & Gas Ullage ({t['initial_ullage_fraction_pct']}% >= 5% ullage)....... PASS")
    passed += 1

    # TEST 09: Multi-Propulsion Preset Audit (Hydrazine, Bipropellant, Hall EP)
    for key in ("leo_sso_hydrazine_smallsat", "geo_biprop_telecom_bus", "constellation_hall_electric_bus"):
        aud = run_ecss_audit(PRESETS[key])
        assert aud["certified"] is True and aud["pass_count"] == 10, f"Preset {key} failed audit"
    print("[TEST 09] Multi-Propulsion Class Audit (Hydrazine, MMH/NTO, Hall HET EP)..... PASS")
    passed += 1

    # TEST 10: Propellant Depletion Exhaustion & Boundary Error Handling
    under_tank = copy.deepcopy(leo)
    under_tank["tank_volume_liters"] = 10.0  # Cannot hold 60 kg of hydrazine
    under_t = solve_blowdown_and_tank(under_tank, b)
    assert under_t["tank_capacity_compliant"] is False

    bad_p = copy.deepcopy(leo)
    bad_p["initial_tank_pressure_bar"] = 5.0
    bad_p["final_tank_pressure_bar"] = 10.0  # Inverted pressures
    raised = False
    try:
        validate_config(bad_p)
    except ValueError:
        raised = True
    assert raised is True
    print("[TEST 10] Tank Volume Exhaustion & Boundary Error Handling................... PASS")
    passed += 1

    print("=" * 76)
    print(f"RESULT: {passed}/{total} TESTS PASSED (100.0% ECSS-E-ST-35-01C Verification Score)")
    print("=" * 76)
    return 0 if passed == total else 1


if __name__ == "__main__":
    sys.exit(run_tests())
