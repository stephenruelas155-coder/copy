#Brain bucket

Berry Cumbie + v1.0
'@stephenruelas155' | 2026-09-14 | GOLF

deployments, codebase, & repo features
resource link

PROD codebase main PROD server GCP DEV codebase dev DEV server Render docs docs/ published docs GitHub Pages CI/CD workflow deploy.yml successful PROD deployment GitHub Action resolved GOLF issue issue #

user story
As a burgeoning full-stack developer,
I want a CI/CD infrastructure
so that I can develop locally, manage my code in GitHub, and automatically deploy changes to DEV and PROD environments.
narrative
In 2--4 sentences, briefly describe your GOLF infrastructure and whatyou built/deployed.

architecture
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
stack
HTML/CSS/JS | Node.js | Express | Git/GitHub | Render | GCP | Linux | Nginx | PM2 | Certbot | GitHub Actions

project structure
Use tree to show your actual project structure.

repo/
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
├── server/
├── .gitignore
└── ...
GCP
external IP: 00.00.00.00
Linux user: username
instructor SSH public key installed: yes

. ├── index.html ├── assets │ ├── css │ │ └── style.css │ ├── img │ └── js │ └── main.js ├── pages │ └── auth.html └── README.md

