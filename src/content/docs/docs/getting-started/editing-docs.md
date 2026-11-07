
---
title: Editing Documentation
description: How to edit and add documentation.
---

Documentation lives in the <a href="https://github.com/aidanwl/igvc-hub" target="_blank" rel="noopener noreferrer">igvc-hub</a> repository, under `src/content/docs/docs/`.

## Editing on GitHub

You don't need to install anything to make small changes.

1. Open the page you want to edit.
2. Click **Edit this page**.
3. Make your changes on GitHub.
4. Submit a pull request.

Documentation-only PRs from trusted collaborators merge automatically after the build passes.

## Editing locally

### Prerequisites

- Git
- Node.js 24
- npm (included with Node.js)

Check your installation:

```bash
git --version
node --version
npm --version
```

If Node.js isn't installed, install Node.js 24 using [Node.js](https://nodejs.org/) or a version manager such as [fnm](https://github.com/Schniz/fnm).

### Setup

Clone the repository:

```bash
git clone https://github.com/aidanwl/igvc-hub.git
cd igvc-hub
```

Install dependencies:

```bash
npm ci
```

Start the local website:

```bash
npm run dev
```

Open `http://localhost:4321/docs/`.

You can now edit Markdown files in `src/content/docs/docs/`. The local preview updates automatically when you save.

### Submitting changes

Create a branch, commit your changes, and open a pull request to `main`.

You can edit documentation offline after the initial setup. An internet connection is needed to push your changes.

## Adding pages

Create a `.md` file in the appropriate documentation directory.

Each page needs frontmatter:

```yaml
---
title: Your Page Title
description: A short description.
---
```

Starlight automatically adds pages to the sidebar in configured sections.

