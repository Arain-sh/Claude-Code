# Contributing

Thanks for contributing to `Claude-Code`.

## Before You Start

- This repository is a reverse-engineered / decompiled project, not an official Anthropic codebase.
- Runtime behavior matters more than broad type cleanup. Please avoid sweeping refactors that only chase decompilation artifacts.
- Many feature-gated paths are intentionally stubbed or disabled. Prefer small, targeted changes over speculative rewrites.

## Local Workflow

```bash
bun install
bun run smoke
bun test
bun run build
```

## Ground Rules

- Preserve upstream attribution and third-party notices.
- Do not mass-fix TypeScript errors unless the change directly improves runtime behavior.
- Keep dead feature-gated code paths buildable when practical, even if they remain disabled at runtime.
- If you touch user-facing docs, keep the repository name `Claude-Code` and maintainer attribution to `Arain` consistent.

## Commits

- Make focused commits.
- If pre-commit lint blocks a necessary repository bootstrap change, document why in the commit or PR.
- Prefer fixing the real issue over bypassing hooks, but use `--no-verify` when the repository's current decompiled state makes the hook unrealistic for the change at hand.
