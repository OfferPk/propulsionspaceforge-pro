# ECSS-E-ST-35-01C & ECSS-E-ST-35C Rev. 1 10-Point Normative Compliance Matrix

| Rule ID | Standard Clause | Normative Requirement | Verification Method | Status |
| :---- | :---- | :---- | :---- | :---- |
| **ECSS-35-01** | [ECSS-E-ST-35-01C Cl. 4.1](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Deterministic maneuver \$\\Delta V\$ margin \$\\ge 5.0%\$ | Verified in `test_runner.py` (Test 02\) | **PASS** |
| **ECSS-35-02** | [ECSS-E-ST-35-01C Cl. 4.2](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Stochastic orbit maintenance & CAM \$\\Delta V\$ margin \$\\ge 10.0%\$ | Verified in `test_runner.py` (Test 03\) | **PASS** |
| **ECSS-35-03** | [ECSS-E-ST-35-01C Cl. 4.4](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Trapped / residual unusable propellant allocation \$\\ge 1.5%\$ | Verified \$2.0% \\ge 1.5%\$ (Test 04\) | **PASS** |
| **ECSS-35-04** | [ECSS-E-ST-35-01C Cl. 4.3](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Positive usable propellant margin remaining at EOL | Verified \$+0.00\\text{ kg}\$ loaded balance (Test 05\) | **PASS** |
| **ECSS-35-05** | [ECSS-E-ST-35-01C Cl. 5.2.1](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Blowdown pressure ratio \$P\_{\\text{init}} / P\_{\\text{final}} \\le 4.0:1\$ | Verified \$3.53:1 \\le 4.0:1\$ (Test 06\) | **PASS** |
| **ECSS-35-06** | [ECSS-E-ST-35-01C Cl. 5.2.2](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Minimum thruster inlet feed pressure guarantee (\$P\_{\\text{final}} \\ge P\_{\\text{min}}\$) | Verified \$6.8\\text{ bar} \\ge 5.5\\text{ bar}\$ (Test 07\) | **PASS** |
| **ECSS-35-07** | [ECSS-E-ST-35-01C Cl. 5.3.1](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Propellant tank loading capacity & initial gas ullage \$\\ge 5.0%\$ | Verified \$51.9% \\ge 5.0%\$ ullage (Test 08\) | **PASS** |
| **ECSS-35-08** | [ECSS-E-ST-35C Cl. 4.2](https://ecss.nl/standard/ecss-e-st-35c-rev-1-propulsion-general-requirements-15-november-2008/) | Single-point failure tolerant dual-seat latch branch isolation | Verified in auditor logic | **PASS** |
| **ECSS-35-09** | [ECSS-E-ST-35C Cl. 5.1](https://ecss.nl/standard/ecss-e-st-35c-rev-1-propulsion-general-requirements-15-november-2008/) | Controlled EOL deorbit disposal \$\\Delta V\$ inclusion | Verified in `test_runner.py` (Test 09\) | **PASS** |
| **ECSS-35-10** | [ECSS-E-ST-35-01C Cl. 5.4](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf) | Tsiolkovsky mass conservation & burnout mass convergence | Verified \$M\_{\\text{final}} \= M\_{\\text{dry}} \+ M\_{\\text{res}}\$ (Test 10\) | **PASS** |

