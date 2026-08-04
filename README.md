# Dummy Ticket Booking - Playwright Tests

This repository contains an end-to-end automation suite using **Playwright** and **TypeScript** to test ticket booking flows and form validations on the [Dummy Ticket Booking Website](https://www.dummyticket.com/dummy-ticket-for-visa-application/).


## Tech Stack & Tools

- **Framework:** [Playwright](https://playwright.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Libraries:** [@faker-js/faker](https://fakerjs.dev/) (for generating dynamic mock data)

## Project Structure

```text
DummyTicketBooking/
├── Pages/
│   ├── BasePage.ts
│   └── DummyTicketPage.ts
├── Test-data/
│   └── BookingData.ts
├── Utils/
│   └── dateUtils.ts
├── tests/
│   └── Booking/
│       ├── DummyTicket.spec.ts
│       └── requiredFieldValidation.spec.ts
└── playwright.config.ts
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install browsers:**
   ```bash
   npx playwright install --with-deps
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

## 🔍 Debugging

If tests fail, Playwright automatically captures:
- **Screenshots**: Saved in the `screenshots/` directory.
- **Test Traces**: Saved in the `traces/` directory, providing a step-by-step recording of the test execution.

## 📝 License

This project is licensed under the MIT License.
