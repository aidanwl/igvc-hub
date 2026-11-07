
---
title: Contributing to Firmware
description: Firmware development workflow and coding conventions.
---

Firmware contributions should be submitted through pull requests. Do not commit directly to `main`.

## Workflow

1. Update your local `main` and create a branch:

   ```bash
   git switch main
   git pull --ff-only
   git switch -c feat/pwm-driver
   ```

2. Make and commit your changes.
3. Open a pull request into `main`.
4. Get another team member (Hoseon) to review and approve it.
5. Merge once approved.

## Branch Naming

Use lowercase kebab-case for branch names.

| Prefix | Purpose |
| --- | --- |
| `feat/` | New drivers or features |
| `fix/` | Bug fixes |
| `docs/` | Documentation changes |

## Code Conventions

These conventions were established on October 16, 2026.

- Format code using the `.clang-format` file in the repository root.
- Use fixed-width integer types, such as `uint32_t`.
- Use `typedef` for structs.
- Use `snake_case` for identifiers.

