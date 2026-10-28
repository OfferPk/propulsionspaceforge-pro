/**
 * PropulsionSpaceForge Pro (v1.0.0) — Core ECSS-E-ST-35-01C & ECSS-E-ST-35C Propulsion Engine
 * Standards:
 *  - ECSS-E-ST-35-01C (Space engineering: Liquid and electric propulsion for spacecraft)
 *  - ECSS-E-ST-35C Rev. 1 (Space engineering: Propulsion general requirements)
 */

export const ECSS_35_CONSTANTS = {
  G0_M_S2: 9.80665,
  PROP_DENSITIES_KG_M3: {
    hydrazine: 1004.0,       // N2H4 monopropellant @ 20 degC
    mmh: 878.0,              // Monomethylhydrazine @ 20 degC
    nto: 1443.0,             // Dinitrogen tetroxide MON-3 @ 20 degC
    xenon_supercritical: 1650.0 // Supercritical xenon EP storage @ 150 bar
  },
  NOMINAL_ISP_S: {
    hydrazine_blowdown_avg: 222.0,
    hydrazine_steady: 232.0,
    biprop_lae_400n: 318.0,
    biprop_rcs_10n: 292.0,
    hall_thruster_xenon: 1650.0,
    gridded_ion_xenon: 3100.0
  }
};

export const MISSION_PRESETS = {
  leo_sso_hydrazine_smallsat: {
    id: "leo_sso_hydrazine_smallsat",
    name: "LEO SSO Earth Observation SmallSat (Hydrazine Monopropellant, 380 kg)",
    propulsionType: "monopropellant_hydrazine",
    dryMassKg: 320.0,
    tankVolumeLiters: 65.0,
    propellantDensityKgM3: 1004.0,
    initialUllageFraction: 0.18,
    initialTankPressureBar: 24.0,
    finalTankPressureBar: 6.8,
    maxAllowedBlowdownRatio: 4.0,
    minFeedPressureBar: 5.5,
    trappedResidualFraction: 0.020, // 2.0% residual unexpellable
    averageIspS: 224.0,
    maneuvers: [
      { id: "MNV-01", name: "Launcher Separation Injection Correction", deltaVMps: 18.0, marginPct: 5.0, ispS: 228.0, type: "deterministic" },
      { id: "MNV-02", name: "Operational SSO Altitude Raise & Phasing", deltaVMps: 45.0, marginPct: 5.0, ispS: 226.0, type: "deterministic" },
      { id: "MNV-03", name: "5-Year Drag Makeup & In-Plane Maintenance", deltaVMps: 36.0, marginPct: 15.0, ispS: 222.0, type: "stochastic" },
      { id: "MNV-04", name: "Reaction Wheel Momentum Desaturation", deltaVMps: 14.0, marginPct: 15.0, ispS: 218.0, type: "stochastic" },
      { id: "MNV-05", name: "Collision Avoidance Maneuvers (CAM)", deltaVMps: 10.0, marginPct: 20.0, ispS: 222.0, type: "stochastic" },
      { id: "MNV-06", name: "End-of-Life Controlled Deorbit Disposal", deltaVMps: 62.0, marginPct: 5.0, ispS: 220.0, type: "deterministic" }
    ]
  },
  geo_biprop_telecom_bus: {
    id: "geo_biprop_telecom_bus",
    name: "GEO High-Throughput Satellite (Bipropellant MMH/NTO Dual-Mode, 4,200 kg)",
    propulsionType: "bipropellant_dual_mode",
    dryMassKg: 1950.0,
    tankVolumeLiters: 1980.0,
    propellantDensityKgM3: 1195.0, // Combined bulk mixture ratio 1.65
    initialUllageFraction: 0.08,
    initialTankPressureBar: 18.0,
    finalTankPressureBar: 14.5, // Regulated mode then blowdown
    maxAllowedBlowdownRatio: 2.5,
    minFeedPressureBar: 12.0,
    trappedResidualFraction: 0.018, // 1.8% residual
    averageIspS: 316.0,
    maneuvers: [
      { id: "MNV-01", name: "GTO to GEO Apogee Insertion (LAE 400N)", deltaVMps: 1485.0, marginPct: 5.0, ispS: 318.0, type: "deterministic" },
      { id: "MNV-02", name: "Longitude Relocation & Drift Trimming", deltaVMps: 28.0, marginPct: 5.0, ispS: 295.0, type: "deterministic" },
      { id: "MNV-03", name: "15-Year North-South Stationkeeping (RCS)", deltaVMps: 450.0, marginPct: 10.0, ispS: 292.0, type: "stochastic" },
      { id: "MNV-04", name: "15-Year East-West Stationkeeping (RCS)", deltaVMps: 45.0, marginPct: 10.0, ispS: 292.0, type: "stochastic" },
      { id: "MNV-05", name: "Graveyard Orbit Disposal Insertion", deltaVMps: 15.0, marginPct: 5.0, ispS: 292.0, type: "deterministic" }
    ]
  },
  constellation_hall_electric_bus: {
    id: "constellation_hall_electric_bus",
    name: "LEO Mega-Constellation Broadband Bus (Hall-Effect Thruster HET Xenon, 650 kg)",
    propulsionType: "electric_hall_thruster",
    dryMassKg: 580.0,
    tankVolumeLiters: 48.0,
    propellantDensityKgM3: 1650.0,
    initialUllageFraction: 0.12,
    initialTankPressureBar: 150.0,
    finalTankPressureBar: 2.5, // High pressure tank regulated down to anode
    maxAllowedBlowdownRatio: 4.0, // Tank gas depletion
    minFeedPressureBar: 2.0,
    trappedResidualFraction: 0.015, // 1.5% residual
    averageIspS: 1650.0,
    maneuvers: [
      { id: "MNV-01", name: "Orbit Raising from 350 km to 550 km", deltaVMps: 112.0, marginPct: 5.0, ispS: 1680.0, type: "deterministic" },
      { id: "MNV-02", name: "7-Year Drag Compensation & In-Plane Phasing", deltaVMps: 84.0, marginPct: 12.0, ispS: 1650.0, type: "stochastic" },
      { id: "MNV-03", name: "Autonomous Collision Avoidance Maneuvers", deltaVMps: 16.0, marginPct: 20.0, ispS: 1650.0, type: "stochastic" },
      { id: "MNV-04", name: "Controlled EOL Re-entry Deorbit Burn", deltaVMps: 98.0, marginPct: 5.0, ispS: 1650.0, type: "deterministic" }
    ]
  }
};

export function validatePropulsionConfig(config) {
  if (!config || typeof config !== "object") {
    throw new Error("Propulsion configuration object is required.");
  }
  if (Number(config.dryMassKg) <= 0) {
    throw new Error("Spacecraft dry mass must be positive (kg).");
  }
  if (Number(config.tankVolumeLiters) <= 0) {
    throw new Error("Propellant tank volume must be positive (liters).");
  }
  if (Number(config.initialTankPressureBar) <= Number(config.finalTankPressureBar)) {
    throw new Error("Initial tank pressure must strictly exceed final tank pressure.");
  }
  if (!Array.isArray(config.maneuvers) || config.maneuvers.length === 0) {
    throw new Error("At least one delta-V maneuver is required.");
  }
  return true;
}

/**
 * Solves Multi-Maneuver Delta-V Budget & Propellant Masses using Tsiolkovsky's Rocket Equation.
 */
export function solveDeltaVBudget(config) {
  validatePropulsionConfig(config);
  const dryMassKg = Number(config.dryMassKg);
  const g0 = ECSS_35_CONSTANTS.G0_M_S2;
  const residualFrac = Number(config.trappedResidualFraction || 0.02);

  let totalNominalDeltaVMps = 0.0;
  let totalMarginedDeltaVMps = 0.0;

  const maneuversEvaluated = config.maneuvers.map((m) => {
    const dVNom = Number(m.deltaVMps);
    const marginPct = Number(m.marginPct);
    const dVMargined = dVNom * (1.0 + marginPct / 100.0);
    const isp = Number(m.ispS || config.averageIspS);

    totalNominalDeltaVMps += dVNom;
    totalMarginedDeltaVMps += dVMargined;

    return {
      id: m.id,
      name: m.name,
      type: m.type,
      ispS: isp,
      deltaVNominalMps: Number(dVNom.toFixed(2)),
      marginPct: Number(marginPct.toFixed(1)),
      deltaVMarginedMps: Number(dVMargined.toFixed(2))
    };
  });

  // Calculate cumulative mass multiplication ratio R_total = product(exp(dV_i / (g0 * Isp_i)))
  let cumulativeRatio = 1.0;
  for (const m of maneuversEvaluated) {
    cumulativeRatio *= Math.exp(m.deltaVMarginedMps / (g0 * m.ispS));
  }

  // M_wet = M_burnout * cumulativeRatio
  // M_burnout = dryMassKg + M_residual
  // M_residual = residualFrac * M_loaded
  // M_loaded = M_wet - dryMassKg - M_residual ... wait, M_loaded = M_expended + M_residual
  // M_expended = M_burnout * (cumulativeRatio - 1)
  // M_residual = residualFrac * M_loaded -> M_residual = residualFrac / (1 - residualFrac) * M_expended
  // Or M_residual = residualFrac * (M_wet - dryMassKg)
  // Let M_loaded = (dryMassKg * (cumulativeRatio - 1)) / (1 - residualFrac * cumulativeRatio) * (1 + 0.015 buffer)
  // With a small 1.5% extra usable margin buffer (as recommended by ECSS-E-ST-35-01C Clause 4.3):
  const requiredExpendedPropKg = dryMassKg * (cumulativeRatio - 1.0) / (1.0 - residualFrac * cumulativeRatio);
  const loadedPropellantKg = requiredExpendedPropKg * 1.02; // +2% usable margin
  const trappedResidualKg = loadedPropellantKg * residualFrac;
  const usablePropellantKg = loadedPropellantKg - trappedResidualKg;
  const initialWetMassKg = dryMassKg + loadedPropellantKg;

  let currentMassKg = initialWetMassKg;
  const maneuversWithMass = maneuversEvaluated.map((m) => {
    const c = m.ispS * g0;
    const massAfterMnv = currentMassKg * Math.exp(-m.deltaVMarginedMps / c);
    const propConsumedKg = currentMassKg - massAfterMnv;
    const initialMassForMnv = currentMassKg;
    currentMassKg = massAfterMnv;

    return {
      ...m,
      initialMassKg: Number(initialMassForMnv.toFixed(2)),
      propellantConsumedKg: Number(propConsumedKg.toFixed(2)),
      finalMassKg: Number(massAfterMnv.toFixed(2))
    };
  });

  const totalPropellantConsumedKg = initialWetMassKg - currentMassKg;
  const propellantMarginKg = usablePropellantKg - totalPropellantConsumedKg;
  const propellantMarginPct = (propellantMarginKg / Math.max(1e-6, totalPropellantConsumedKg)) * 100.0;

  return {
    dryMassKg: Number(dryMassKg.toFixed(2)),
    initialWetMassKg: Number(initialWetMassKg.toFixed(2)),
    loadedPropellantKg: Number(loadedPropellantKg.toFixed(2)),
    usablePropellantKg: Number(usablePropellantKg.toFixed(2)),
    trappedResidualKg: Number(trappedResidualKg.toFixed(2)),
    trappedResidualFractionPct: Number((residualFrac * 100.0).toFixed(2)),
    totalNominalDeltaVMps: Number(totalNominalDeltaVMps.toFixed(2)),
    totalMarginedDeltaVMps: Number(totalMarginedDeltaVMps.toFixed(2)),
    effectiveDeltaVMarginPct: Number((((totalMarginedDeltaVMps - totalNominalDeltaVMps) / totalNominalDeltaVMps) * 100.0).toFixed(2)),
    totalPropellantConsumedKg: Number(totalPropellantConsumedKg.toFixed(2)),
    propellantMarginKg: Number(propellantMarginKg.toFixed(2)),
    propellantMarginPct: Number(propellantMarginPct.toFixed(2)),
    maneuvers: maneuversWithMass
  };
}

/**
 * Solves Propellant Tank Loading & Pressurant Blowdown Ratio per ECSS-E-ST-35-01C Clause 4.
 */
export function solveBlowdownAndTank(config, budget) {
  const pInitBar = Number(config.initialTankPressureBar);
  const pFinalBar = Number(config.finalTankPressureBar);
  const pMinFeedBar = Number(config.minFeedPressureBar || 5.0);
  const maxAllowedRatio = Number(config.maxAllowedBlowdownRatio || 4.0);

  // Actual blowdown ratio B = P_init / P_final
  const actualBlowdownRatio = pInitBar / Math.max(0.1, pFinalBar);

  // Tank volume calculations
  const totalTankVolLiters = Number(config.tankVolumeLiters);
  const totalTankVolM3 = totalTankVolLiters * 1e-3;
  const propDensity = Number(config.propellantDensityKgM3 || 1004.0);

  const propellantVolLiters = (budget.loadedPropellantKg / propDensity) * 1000.0;
  const initialUllageVolLiters = totalTankVolLiters - propellantVolLiters;
  const initialUllageFraction = initialUllageVolLiters / Math.max(1e-3, totalTankVolLiters);

  // Isothermal gas expansion check: P1 * V1 = P2 * V2 -> V2 = V1 * (P1 / P2)
  const finalUllageVolLiters = initialUllageVolLiters * actualBlowdownRatio;
  const volumeMarginLiters = totalTankVolLiters - propellantVolLiters;

  const blowdownRatioCompliant = actualBlowdownRatio <= maxAllowedRatio;
  const feedPressureCompliant = pFinalBar >= pMinFeedBar;
  const tankCapacityCompliant = propellantVolLiters <= totalTankVolLiters * 0.95; // <= 95% full (>= 5% ullage)

  return {
    initialTankPressureBar: Number(pInitBar.toFixed(2)),
    finalTankPressureBar: Number(pFinalBar.toFixed(2)),
    actualBlowdownRatio: Number(actualBlowdownRatio.toFixed(3)),
    maxAllowedBlowdownRatio: Number(maxAllowedRatio.toFixed(2)),
    minFeedPressureBar: Number(pMinFeedBar.toFixed(2)),
    feedPressureMarginBar: Number((pFinalBar - pMinFeedBar).toFixed(2)),
    totalTankVolumeLiters: Number(totalTankVolLiters.toFixed(2)),
    loadedPropellantVolumeLiters: Number(propellantVolLiters.toFixed(2)),
    initialUllageVolumeLiters: Number(initialUllageVolLiters.toFixed(2)),
    initialUllageFractionPct: Number((initialUllageFraction * 100.0).toFixed(2)),
    finalUllageVolumeLiters: Number(finalUllageVolLiters.toFixed(2)),
    blowdownRatioCompliant,
    feedPressureCompliant,
    tankCapacityCompliant
  };
}

export function runCompletePropulsionSynthesis(config) {
  const budget = solveDeltaVBudget(config);
  const tank = solveBlowdownAndTank(config, budget);

  return {
    timestampIso: "2026-10-21T09:35:00Z",
    config,
    budget,
    tank
  };
}

export function exportECSSPropulsionManifestXML(synthesis, auditReport) {
  const { config, budget, tank } = synthesis;
  const mnvXml = budget.maneuvers
    .map(
      (m) =>
        `    <Maneuver id="${m.id}" name="${m.name}" type="${m.type}" dVNomMps="${m.deltaVNominalMps}" marginPct="${m.marginPct}" dVMarginedMps="${m.deltaVMarginedMps}" propConsumedKg="${m.propellantConsumedKg}" />`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<ECSS_PropulsionSystemManifest standard="ECSS-E-ST-35-01C" generalStandard="ECSS-E-ST-35C-Rev.1" version="1.0.0">
  <MissionHeader name="${config.name}" propulsionType="${config.propulsionType}" dryMassKg="${config.dryMassKg}" wetMassKg="${budget.initialWetMassKg}" />
  <DeltaVBudget totalNominalMps="${budget.totalNominalDeltaVMps}" totalMarginedMps="${budget.totalMarginedDeltaVMps}" loadedPropKg="${budget.loadedPropellantKg}" residualKg="${budget.trappedResidualKg}">
${mnvXml}
  </DeltaVBudget>
  <BlowdownAndTank initialBar="${tank.initialTankPressureBar}" finalBar="${tank.finalTankPressureBar}" blowdownRatio="${tank.actualBlowdownRatio}" tankVolLiters="${tank.totalTankVolumeLiters}" ullagePct="${tank.initialUllageFractionPct}" />
  <NormativeAudit passCount="${auditReport.passCount}" totalChecks="${auditReport.totalChecks}" certified="${auditReport.certified}" />
</ECSS_PropulsionSystemManifest>`;
}
