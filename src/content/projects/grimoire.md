---
title: Grimoire
description: A coding-agent CLI built with Textual, compatible with a Claude subscription.
tags: ["Python", "CLI", "AI"]
github: "https://github.com/CutieillFusion/Grimoire"
order: 4
---
**Your AI coding spellbook for the terminal.**

Grimoire is a Python-based AI coding CLI built with [Textual](https://textual.textualize.io/) that lets you edit files, run commands, search codebases, and more — all from your terminal.

## Install

```bash
pip install -e ".[dev]"
```

## Usage

```bash
grim
```

## Stack

- **Python 3.12+**
- **Textual** — Terminal UI framework
- **Typer** — CLI parsing
- **Pydantic v2** — Schema validation
- **Anthropic SDK** — LLM API client
