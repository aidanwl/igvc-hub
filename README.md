# IGVC Hub

Internal engineering website for the Autonomy Lab at The Cooper Union.

The hub brings together team documentation, repositories, and engineering tools in one place.

## Development

Built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

**Requirements:** Node.js 24 and npm.

Clone the repository:

```bash
git clone https://github.com/aidanwl/igvc-hub.git
cd igvc-hub
```

Install dependencies and start the local development server:

```bash
npm ci
npm run dev
```

Open `http://localhost:4321/`.

To generate the production website:

```bash
npm run build
```

Static files are generated in `dist/`.

## Project Structure

```text
src/
├── pages/                 Homepage, repositories, and future tools
├── components/            Shared UI components
├── layouts/               Page layouts
├── styles/                CSS
└── content/docs/docs/     Starlight documentation
```

## Documentation

Documentation is written in Markdown and organized by topic.

To edit or add documentation, see [Editing Documentation](src/content/docs/docs/getting-started/editing-docs.md).

Trusted contributors can submit documentation-only pull requests that merge automatically after the build passes.

Changes to website code or configuration require the normal maintainer review process.
