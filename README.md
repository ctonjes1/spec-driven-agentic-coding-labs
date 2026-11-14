# Specification-Driven Agentic Coding Labs

A practical series of 45–60 minute labs for using Claude Code and Codex with production-oriented engineering discipline. Every lab starts with a frozen specification, maps changes to numbered requirements, exercises at least one adversarial or failure path, and ends with evidence-backed review rather than a vibe-based completion claim.

## What is included

- Eleven self-contained labs rotating across secure enterprise services and agents, Python automation and compliance tooling, and .NET/Azure production systems
- A SCORM 1.2 course with an orientation SCO and one SCO per lab
- Offline-capable HTML, CSS, and JavaScript source with no external runtime dependencies
- Facilitator and LMS administrator guidance
- A nine-slide editable PowerPoint overview
- Templates for specifications, traceability, and evidence collection
- Automated source and package validation

## Quick start

Prerequisites: Node.js 20+ and a ZIP utility.

```bash
npm run validate
npm run package
```

The package command creates `dist/spec-driven-agentic-coding-labs-scorm-1.2.zip`. Import that ZIP into a staging LMS as SCORM 1.2 and complete the checks in [docs/RELEASE_CHECKLIST.md](docs/RELEASE_CHECKLIST.md).

For a browser-only preview, serve `scorm-src/` from any static web server. SCORM status and score reporting require an LMS runtime.

## Learning design

Each lab requires the learner to:

1. Write and freeze `SPEC.md` before implementation.
2. Define explicit, testable acceptance criteria.
3. Split work deliberately between Claude Code and Codex.
4. Trace every material code change to a numbered requirement.
5. preserve test, security, audit, and review evidence.
6. Cite evidence for every completion claim and state what remains unproven.

SCORM completion records instructional progress and learner attestations. It does **not** inspect repositories, authenticate evidence, certify compliance, or establish production readiness.

## Repository map

| Path | Purpose |
|---|---|
| `scorm-src/` | Editable SCORM 1.2 course source |
| `docs/` | Course, facilitator, LMS, licensing, and release guidance |
| `templates/` | Reusable spec-first engineering artifacts |
| `presentations/` | Editable course overview deck |
| `scripts/` | Portable validation and packaging scripts |
| `.github/workflows/` | Pull-request and branch validation |

## Licensing

Software, build scripts, and the SCORM runtime wrapper are licensed under [Apache License 2.0](LICENSE). Instructional prose, lab text, facilitator materials, and templates are licensed under [Creative Commons Attribution 4.0 International](LICENSE-CONTENT.md). See [docs/LICENSING.md](docs/LICENSING.md) for the file-level boundary and attribution examples.

## Independent project

This is an independent educational resource. It does not represent official policy, guidance, or endorsement of the District of Columbia, the Department of Employment Services, Anthropic, or OpenAI. Product names are used only to describe compatible tools.

## Contributing and security

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing a lab or behavior change. Report suspected vulnerabilities through the private process in [SECURITY.md](SECURITY.md), not a public issue.

