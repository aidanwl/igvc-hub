---
title: Repository Structure
description: Organization of the Autonomy Lab firmware repository.
---

The [AutonomyLab-Firmware](https://github.com/hoseony/AutonomyLab-Firmware) repository contains firmware developed by the firmware subteam of Autonomy Lab at the Cooper Union.

## Directory Structure

    AutonomyLab-Firmware/
    ├── drivers/
    │   ├── rp2350/
    │   │   ├── include/
    │   │   └── *.c
    │   └── devices/
    ├── lib/
    ├── examples/
    ├── cmake/
    ├── docs/
    └── .github/workflows/

## Drivers

Hardware-specific drivers belong in `drivers/`.

- `rp2350/` — RP2350 peripheral drivers (GPIO, PWM, UART, etc.).
- `devices/` — External hardware drivers, organized by part number.
- Keep drivers bare-metal.
- Match register and field names to the datasheet.
- Reference datasheet sections when helpful.

## Libraries

`lib/` contains hardware-independent code that should also compile
on a development machine.

- Accesses hardware registers? Put it in `drivers/`.
- Only used by one driver? Keep it with that driver.
- Shared across drivers or examples? Put it in `lib/`.

## Examples

`examples/` contains small programs demonstrating and testing
individual drivers.

Use these to verify driver functionality and demonstrate usage.

## Other directories

- `cmake/` — Shared CMake utilities, including Pico SDK integration.
- `docs/` — Existing firmware documentation.
- `.github/workflows/` — CI and documentation publishing workflows.
