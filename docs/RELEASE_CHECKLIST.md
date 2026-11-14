# Release checklist

## Source controls

- [ ] Specification, acceptance criteria, and course behavior agree.
- [ ] Every material change maps to a requirement or documented release objective.
- [ ] `npm run validate` passes with preserved output.
- [ ] `npm run package` creates the expected ZIP.
- [ ] The ZIP contains `imsmanifest.xml` at its root.
- [ ] No secrets, personal data, employer-confidential material, or internal URLs are present.
- [ ] License and attribution notices remain accurate.

## LMS staging

- [ ] Import succeeds as SCORM 1.2.
- [ ] Orientation and all eleven labs launch.
- [ ] Navigation and keyboard focus work.
- [ ] Bookmarking and resume work after closing the player.
- [ ] Score and lesson status are recorded correctly.
- [ ] Failed checks do not report completion.
- [ ] The LMS makes no inference that completion proves production readiness.

## Release evidence

- [ ] Validation output is attached to the release or CI run.
- [ ] Staging LMS, browser versions, and test date are recorded.
- [ ] Known limitations and unresolved findings are documented.
- [ ] Release notes name the commit used to build the ZIP.

