# brain bucket
> to check your knowledge 

### Stephen Ruelas v1.0

`@stephenruelas155` \| `Y2026-09-14` \| `GOLF`

### deployments, codebase, & repo features 

  resource                     link
  ---------------------------- ----------------------
  PROD codebase                [[`main`](URL)](https://github.com/stephenruelas155-coder/copy/tree/main)
  PROD server                  [GCP](URL)
  DEV codebase                 [[`dev`](URL)](https://github.com/stephenruelas155-coder/copy/tree/dev)
  DEV server                   [[Render](URL)](https://copy21whtkldfdlk.onrender.com)
  docs                         [[`docs/`](URL)](https://github.com/stephenruelas155-coder/copy/tree/main/docs)
  published docs               [[GitHub Pages](URL)](https://github.com/stephenruelas155-coder/copy/tree/main/public/pages)
  CI/CD workflow               [[`deploy.yml`](URL)](https://github.com/stephenruelas155-coder/copy/blob/main/.github/workflows/deploy-main-to-gcp.yml)
  successful PROD deployment   [[GitHub Action](URL)](https://github.com/stephenruelas155-coder/copy/actions)
  resolved GOLF issue          [[issue \#](URL)](https://github.com/stephenruelas155-coder/copy/issues)

### user story

- **As a** burgeoning full-stack developer,
- **I want** a CI/CD infrastructure
- **so that** I can develop locally, manage my code in GitHub, and
    automatically deploy changes to DEV and PROD environments.

### narrative

In 2--4 sentences, briefly describe your GOLF infrastructure and whatyou built/deployed.

### architecture

``` text
LOCAL
  │
  ▼
GitHub
  │
  ├── dev  ──► Render ─────────► DEV
  │
  └── main ──► GitHub Actions ─► GCP ──► PROD
```

### stack

`HTML/CSS/JS` \| `Node.js` \| `Express` \| `Git/GitHub` \| `Render` \|
`GCP` \| `Linux` \| `Nginx` \| `PM2` \| `Certbot` \| `GitHub Actions`

### project structure

Use `tree` to show your actual project structure.

``` text
repo/
├── .github/
│   └── workflows/
├── docs/
│   └── README.md
├── public/
├── server/
├── .gitignore
└── ...
```

### GCP

external IP: `00.00.00.00`\
Linux user: `username`\
instructor SSH public key installed: `yes`
