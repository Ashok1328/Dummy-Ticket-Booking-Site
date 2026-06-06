import { test } from "@playwright/test";

import { DummyTicketPage } from "../../Pages/DummyTicketPage";

test("Verify required field validations", async ({ page }) => {
  const dummyTicket = new DummyTicketPage(page);

  await dummyTicket.goto();

  // Select product
  await dummyTicket.selectProduct();

  // Click place order without filling fields
  await dummyTicket.placeOrder();

  // Assertions
  await dummyTicket.verifyFirstNameRequiredError();

  await dummyTicket.verifyLastNameRequiredError();

  await dummyTicket.verifyEmailRequiredError();

  await dummyTicket.verifyPhoneRequiredError();
});
