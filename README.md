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

3. **Run tests:**
   ```bash
   npx playwright test
   ```
