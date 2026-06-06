## Overview

Dummy-Ticket-Booking-Site is a small demo ticket booking website used to demonstrate end-to-end test automation using Playwright and the Page Object Model (POM) pattern.

## Features

- Playwright-based UI automation
- POM structure for maintainable tests
- Example test cases that cover basic booking flows
- Local and CI-friendly test execution

## Prerequisites

- Node.js (LTS recommended)
- npm or yarn
- Git (for cloning the repository)

## Installation

1. Clone the repository:
  - git clone <repository-url>
2. Install dependencies:
  - npm install
3. Install Playwright browsers:
  - npx playwright install

## Running Tests

- Run the full test suite:
  - npx playwright test
- Run a single test file:
  - npx playwright test tests/example.spec.ts
- Generate and open the HTML report:
  - npx playwright show-report
- Run tests headed (with browser UI):
  - npx playwright test --headed

Adjust the commands if the project uses JavaScript (.js) instead of TypeScript (.ts).

## Test Structure & POM

- tests/            — test specifications
- src/pages/        — Page Object classes encapsulating UI interactions
- src/utils/        — helper utilities and test data
- playwright.config.js — Playwright configuration (browsers, timeouts, reporters)

Page Objects should expose clear actions (e.g., navigateTo(), selectSeat(), submitBooking()) and keep assertions inside test files.

## Writing Tests

- Keep tests focused on user flows.
- Use Page Objects for interactions and test files for assertions.
- Use fixtures (Playwright test fixtures or custom) to setup/teardown test state.
- Keep test data separate from test logic.

## CI Integration

- Add the Playwright install step in the CI pipeline:
  - npm ci
  - npx playwright install --with-deps
  - npx playwright test --reporter=dot

## Contributing

- Open an issue to propose changes or report bugs.
- Create a descriptive PR with focused commits and a short summary of changes.

## License

- Add a LICENSE file or specify the preferred license for this project.
