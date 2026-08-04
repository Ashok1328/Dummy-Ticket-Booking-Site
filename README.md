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
