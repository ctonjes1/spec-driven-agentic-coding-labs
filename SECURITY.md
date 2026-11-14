# Security policy

## Supported version

Security fixes are applied to the latest version on the default branch.

## Reporting a vulnerability

Do not disclose suspected vulnerabilities, sensitive data, credentials, or exploit details in a public issue. Use GitHub's private vulnerability reporting feature for this repository. If that feature is unavailable, contact the repository owner privately through the contact method listed on the owner's GitHub profile.

Include the affected file or module, reproduction conditions, impact, and any safe mitigation you have identified. Do not test against systems or data you do not own or have explicit permission to use.

## Scope

The course package is static and makes no external network calls. Its main security boundaries are LMS JavaScript execution, SCORM runtime communication, learner-provided evidence, and the packaging/release pipeline. LMS configuration and submitted engineering projects remain outside this repository's security boundary.

