# Dummy Ticket Booking - Playwright Automation

A comprehensive end-to-end test automation framework built with Playwright and TypeScript for the dummy ticket booking website. This project demonstrates modern test automation practices including the Page Object Model (POM), data-driven testing, and robust assertion strategies.

## 🚀 Features

- **Page Object Model (POM)**: Well-structured, maintainable, and reusable page objects for easy navigation and interaction.
- **TypeScript Support**: Type-safe tests and utilities for better code quality and developer experience.
- **Data-Driven Testing**: Test data is managed separately from test logic using JSON files.
- **Multiple Payment Methods**: Includes dedicated tests for PayPal and Razorpay payment gateways.
- **Comprehensive Validations**: Extensive error handling and validation checks for user inputs.
- **CI/CD Ready**: Configured to run seamlessly in Continuous Integration environments.
- **Rich Reporting**: Generates detailed HTML reports with screenshots and traces.

## 🛠️ Tech Stack

- **Automation Framework**: [Playwright](https://playwright.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [npm](https://www.npmjs.com/)
- **Test Runner**: [Playwright Test](https://playwright.dev/docs/intro)

## 📋 Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js)

## 📂 Project Structure

```
DummyTicketBooking/
├── tests/                  # All test files and specifications
│   ├── Booking/            # Test scenarios related to booking
│   └── Validation/         # Validation test cases
├── Pages/                  # Page Object Model classes
│   ├── BasePage.ts         # Common page interactions
│   ├── DummyTicketPage.ts  # Main booking page logic
│   └── BillingPage.ts      # Billing details and payment
├── Utils/                  # Utility functions and helpers
│   ├── dateUtils.ts        # Date selection helpers
│   ├── excelUtils.ts       # Excel data reading utilities
│   └── testUtils.ts        # General test utilities
├── TestData/               # Test data files
│   ├── billingData.json    # Billing information
│   └── passengerData.json  # Passenger details
├── screenshots/            # Automatic screenshot captures
├── traces/                 # Test traces for debugging
├── playwright.config.ts     # Playwright configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### 1. Install Dependencies

Navigate to the project directory and install all necessary packages:

```bash
npm install
```

### 2. Install Playwright Browsers

Install the required browsers (Chromium, Firefox, and WebKit):

```bash
npx playwright install
```

### 3. Configure and Run Tests

**Run all tests:**

```bash
npx playwright test
```

**Run with browser UI (headed mode):**

```bash
npx playwright test --headed
```

**Run a specific test file:**

```bash
npx playwright test tests/Booking/Booking.spec.ts
```

**Run in parallel mode:**

```bash
npx playwright test --workers=2  # Runs 2 tests in parallel
```

### 4. View Reports

After test execution, generate and view the HTML report:

```bash
npx playwright show-report
```


