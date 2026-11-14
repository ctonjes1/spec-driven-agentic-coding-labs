# Contributing

Contributions are welcome when they preserve the course's specification-first method and do not include confidential, controlled, proprietary, or personal data.

## Before opening a pull request

1. Open an issue describing the learning objective and affected requirement IDs.
2. Update the specification or course documentation before changing behavior.
3. Add or update explicit acceptance criteria and at least one failure-path test.
4. Map every material change to a requirement in the pull-request description.
5. Run `npm run validate` and `npm run package`.
6. Inspect the generated ZIP in a staging LMS when the change affects SCORM behavior.

Do not silently resolve contradictions between tests and specifications. Record the conflict, revise the governing artifact, and obtain review before implementation.

By submitting a contribution, you agree that software contributions are provided under Apache-2.0 and instructional-content contributions under CC BY 4.0, consistent with the repository's license map.

