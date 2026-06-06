import { test } from "@playwright/test";

import { DummyTicketPage } from "../../Pages/DummyTicketPage";

import { generateBookingData } from "../../Test-data/BookingData";

test("Dummy Ticket Booking Flow", async ({ page }) => {
  const bookingData = generateBookingData();

  const dummyTicket = new DummyTicketPage(page);

  await dummyTicket.goto();

  await dummyTicket.selectProduct();

  await dummyTicket.fillPassenger1(bookingData.passenger1);

  await dummyTicket.addPassenger();

  await dummyTicket.fillPassenger2(bookingData.passenger2);

  await dummyTicket.selectPassengerType();

  await dummyTicket.fillTravelDetails(bookingData.travel);

  await dummyTicket.addNotes(bookingData.notes);

  await dummyTicket.fillBillingDetails(bookingData.billing);

  await dummyTicket.fillCardDetails();

  await dummyTicket.placeOrder();
});
