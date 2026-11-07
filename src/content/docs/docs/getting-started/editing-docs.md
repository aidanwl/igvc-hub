---
title: Editing Documentation
description: How to edit and add documentation.
---

Documentation is maintained in the [igvc-hub repository](https://github.com/aidanwl/igvc-hub), under `src/content/docs/docs/`.

You can edit documentation directly on GitHub or locally using a text editor.

## Editing on GitHub

For small changes, you don't need to install anything.

1. Open the documentation page you want to edit.
2. Click **Edit this page** to open its source on GitHub.
3. Make your changes.
4. Click **Commit changes**.
5. Select **Create a new branch for this commit and start a pull request**.
6. Submit the pull request.

GitHub handles creating the branch for you.

To add a new page, navigate to `src/content/docs/docs/` in the repository and select **Add file → Create new file**.

## Editing Locally

Local development lets you preview changes and work offline.

### Prerequisites

- Git
- Node.js 24
- npm (included with Node.js)

Check that everything is installed:

```bash
git --version
node --version
npm --version
```

If necessary, install [Node.js](https://nodejs.org/) or use a version manager such as [fnm](https://github.com/Schniz/fnm).

### Initial Setup

Clone the repository:

```bash
git clone https://github.com/aidanwl/igvc-hub.git
cd igvc-hub
```

Install dependencies:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:4321/docs/` to preview the documentation.

Changes to Markdown files are reflected automatically when you save.

### Working with Branches

Create a new branch for each change or related set of changes. Don't push directly to `main`.

Start from the latest `main`:

```bash
git switch main
git pull --ff-only
git switch -c docs/motor-driver
```

After editing your files, commit and push:

```bash
git add src/content/docs/docs/
git commit -m "Document motor driver"
git push -u origin docs/motor-driver
```

Open a pull request into `main` on GitHub.

Use short, descriptive branch names, such as:

- `docs/motor-driver`
- `docs/can-protocol`
- `docs/setup-guide`

After your PR merges, switch back to `main` and pull the latest changes before starting another branch.

You can edit files offline after the initial setup. An internet connection is only needed for operations such as pulling, pushing, or installing dependencies.

## Adding and Organizing Pages

Create Markdown files (`.md`) in the appropriate section of `src/content/docs/docs/`.

Each page needs frontmatter at the top:

```yaml
---
title: Your Page Title
description: A short description.
---
```

Use folders to group related features or subsystems. For example:

```text
firmware/
├── motors/
│   ├── md30c.md
│   └── pwm.md
├── communications/
│   └── can.md
└── sensors/
    └── encoders.md
```

A few guidelines:

- Keep related documentation together.
- Use descriptive filenames and titles.
- Create folders when multiple pages belong together.
- Don't create a separate page for every small function or detail.

New Markdown pages and folders are automatically added to the sidebar within configured documentation sections.

On GitHub, you can create a folder and file together by entering a path such as `firmware/motors/pwm.md` when creating a new file.

## Publishing Changes

All documentation changes go through pull requests.

**Documentation-only PRs from trusted collaborators merge automatically** once the website passes its build checks. No manual approval or merge is needed.

Changes to website code, configuration, or other files require the normal maintainer review process.

Once documentation is merged, it will appear on the website after the next deployment.

