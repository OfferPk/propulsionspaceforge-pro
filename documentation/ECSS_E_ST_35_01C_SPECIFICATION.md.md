# ECSS-E-ST-35-01C & ECSS-E-ST-35C Rev. 1 Engineering Specification

## 1\. Normative Scope & Reference Standards

**PropulsionSpaceForge Pro (v1.0.0)** implements the mathematical formulation, blowdown thermodynamics, and margin budgeting requirements of:

- [**ECSS-E-ST-35-01C**](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) — *Space engineering: Liquid and electric propulsion for spacecraft* (15 November 2008).  
- [**ECSS-E-ST-35C Rev. 1**](https://ecss.nl/standard/ecss-e-st-35c-rev-1-propulsion-general-requirements-15-november-2008/) — *Space engineering: Propulsion general requirements* (15 November 2008).  
- **ISO 24113** — *Space systems: Space debris mitigation requirements* (Controlled EOL deorbit/graveyard disposal).

## 2\. Mathematical Formulation

### 2.1 Tsiolkovsky Rocket Equation & Multi-Maneuver Integration (Clause 4.1)

For sequential maneuver \$i\$ with margined velocity increment \$\\Delta V\_{\\text{marg},i}\$ and effective exhaust velocity \$c\_i \= I\_{\\text{sp},i} \\cdot g\_0\$:

\$\$M\_{i,\\text{final}} \= M\_{i,\\text{init}} \\cdot \\exp\\left(-\\frac{\\Delta V\_{\\text{marg},i}}{I\_{\\text{sp},i} \\cdot g\_0}\\right), \\quad \\Delta m\_{\\text{prop},i} \= M\_{i,\\text{init}} \- M\_{i,\\text{final}}\$\$

### 2.2 ECSS Normative Propellant Margin Policy (Clause 4.2)

- **Deterministic Maneuvers**: \$\\ge 5.0%\$ margin on nominal \$\\Delta V\$ (orbit acquisition, apogee insertion, deorbit disposal).  
- **Stochastic Maneuvers**: \$\\ge 10.0%\\text{–}20.0%\$ margin on nominal \$\\Delta V\$ (drag makeup, stationkeeping, wheel desaturation, collision avoidance).

### 2.3 Trapped / Residual Unusable Propellant Allocation (Clause 4.4)

Residual propellant trapped in propellant management devices (PMD), surface tension sponge vanes, and line manifolds must satisfy:

\$\$m\_{\\text{residual}} \\ge 0.015 \\cdot m\_{\\text{loaded}} \\quad (\\ge 1.5%)\$\$

### 2.4 Tank Pressurant Blowdown Thermodynamics (Clause 5.2)

In blowdown liquid systems, the pressure ratio must preserve chamber combustion stability and satisfy:

\$\$B \= \\frac{P\_{\\text{initial}}}{P\_{\\text{final}}} \\le 4.0:1 \\quad \\text{and} \\quad P\_{\\text{final}} \\ge P\_{\\text{min,feed}}\$\$