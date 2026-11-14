# LMS administrator guide

## Package

Specification-Driven Agentic Coding Labs, SCORM 1.2, version 1.0. The package contains one orientation SCO and eleven lab SCOs.

## Import

1. Build the package with `npm run package` or download a reviewed release asset.
2. Import the ZIP as SCORM 1.2 in a staging course.
3. Preserve the manifest-defined organization and mastery score.
4. Launch in the same window or a resizable LMS player.
5. Allow JavaScript, cookies, and browser local storage. No external network access is required.
6. Keep the LMS assignment area separate for repositories and evidence packages.

## Tracking

Each lab records lesson status, raw score, lesson location, and suspend data. A lab passes at 85%. Four knowledge questions account for 80 points and evidence attestations account for 20 points, so all questions and attestations are required to pass.

## Staging verification

Confirm launch, navigation, bookmarking, resume, score reporting, status reporting, keyboard access, and completion rollup in each supported LMS/browser combination. Verify that failed knowledge checks remain incomplete and that a relaunch restores progress.

## Limits

SCORM records instructional completion and learner attestations. It does not inspect a repository, validate test output, authenticate engineering evidence, or establish production readiness. A qualified facilitator must review those artifacts.

