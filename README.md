# PropulsionSpaceForge Pro (v1.0.0)

### Spacecraft Chemical & Electric Propulsion Delta-V Budgeting, Tank Blowdown & Propellant Residual Studio (ECSS-E-ST-35-01C & ECSS-E-ST-35C Rev. 1\)

---

## 1\. Product Overview

**PropulsionSpaceForge Pro (v1.0.0)** is an autonomous, production-grade spacecraft propulsion engineering workstation implementing the European Cooperation for Space Standardization (ECSS) standards [ECSS-E-ST-35-01C](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) (*Liquid and electric propulsion for spacecraft*) and [ECSS-E-ST-35C Rev. 1](https://ecss.nl/standard/ecss-e-st-35c-rev-1-propulsion-general-requirements-15-november-2008/) (*Propulsion general requirements*).

Propellant mass sizing is the decisive mass driver for satellites and orbital transfer stages. Underestimating required \$\\Delta V\$ margins, neglecting unusable propellant trapped in propellant management devices (PMD), or exceeding allowable tank blowdown ratios leads to premature thruster flameout, uncontrolled tumbling, or failure to deorbit per ISO 24113 space debris regulations. **PropulsionSpaceForge Pro** delivers automated Tsiolkovsky multi-maneuver mass integration, deterministic/stochastic ECSS margin verification, tank gas blowdown thermodynamics (\$P\_1/P\_2 \\le 4.0\$), and trapped residual accounting across Hydrazine, Bipropellant MMH/NTO, and Hall-Effect Xenon electric propulsion systems.

---

## 2\. Directory Structure

propulsionspace-forge-pro/

├── README.md                                       \# Operational manual & technical overview

├── build/

│   └── propulsionspace-forge-pro-v1.0.0.zip        \# Standalone distribution package

├── documentation/

│   ├── ECSS\_E\_ST\_35\_01C\_SPECIFICATION.md           \# Mathematical & normative specification

│   └── ECSS\_PROPULSION\_COMPLIANCE\_MATRIX.md        \# 10-point ECSS verification matrix

├── screenshots/

│   ├── propulsion-architecture-diagram.svg         \# Vector ECSS-E-ST-35-01C architecture blueprint

│   ├── propulsion-studio-preview.svg               \# Vector Glass-Cockpit UI preview

│   └── propulsion-studio-screenshot.png            \# High-resolution Studio UI screenshot

└── source-code/

    ├── index.html                                  \# Interactive Glass-Cockpit Web Studio

    ├── package.json                                \# ES6 module configuration

    ├── propulsion-engine.js                        \# Pure ES6 ECSS-E-ST-35-01C physics engine

    ├── propulsion-auditor.js                       \# 10-Point normative compliance auditor

    ├── propulsion\_cli.py                           \# Python 3 CLI synthesis & audit workstation

    └── test\_runner.py                              \# 10-test automated verification suite

---

## 3\. Quick Start & Verification

\# Run the Python 3 CLI workstation (supports leo\_sso\_hydrazine\_smallsat, geo\_biprop\_telecom\_bus, constellation\_hall\_electric\_bus)

python3 source-code/propulsion\_cli.py \--preset leo\_sso\_hydrazine\_smallsat

\# Execute the 10-point automated verification test suite

python3 source-code/test\_runner.py

---

## 4\. Commercial Licensing & Monetization Strategy

- **Propulsion / GNC Engineer Seat (Micro-SaaS)**: **\$149 / month** (unlimited multi-maneuver delta-V budgets, tank blowdown sizing, ECSS XML manifest exports, and CLI integration).  
- **Commercial Flight Mission Perpetual License**: **\$1,499 one-time** per spacecraft flight program (includes full ES6/Python source code, custom thruster/propellant density libraries, and ECSS CDR compliance pack).