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

## 📝 Writing New Tests

To add a new test:

1. Create a new Page Object class in `Pages/` for any new pages you need to interact with.
2. Create a test file in `tests/` (follow the naming convention like `Booking.spec.ts`).
3. Use the provided fixtures and utilities to write your test.
4. Add assertions to validate the expected behavior.

**Example Test Structure:**

```typescript
import { test, expect } from "@playwright/test";
import { DummyTicketPage } from "../Pages/DummyTicketPage";
import billingData from "../TestData/billingData.json";

test("successful booking flow", async ({ page }) => {
  const dummyTicketPage = new DummyTicketPage(page);
  
  await dummyTicketPage.goto();
  await dummyTicketPage.selectProduct();
  await dummyTicketPage.fillPassenger1(passengerData);
  await dummyTicketPage.fillBillingDetails(billingData);
  await dummyTicketPage.placeOrder();
  
  await expect(page).toHaveTitle("Dummy Ticket Booking");
});
```

## 📊 Available Test Data

Test data is centralized in the `TestData/` directory:

- `passengerData.json`: Contains sample passenger details (name, DOB, gender, etc.).
- `billingData.json`: Contains billing information (name, contact, address, etc.).
- `paymentData.json`: Contains payment details (card info, PayPal credentials).

## 🔍 Debugging

If tests fail, Playwright automatically captures:
- **Screenshots**: Saved in the `screenshots/` directory.
- **Test Traces**: Saved in the `traces/` directory, providing a step-by-step recording of the test execution.

## 🤝 Contributing

1. Create a new branch for your feature: `git checkout -b feature/YourFeature`
2. Commit your changes: `git commit -m 'Add some feature'`
3. Push to the branch: `git push origin feature/YourFeature`
4. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
