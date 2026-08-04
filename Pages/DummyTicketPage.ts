import { expect, Page } from "@playwright/test";

import { BasePage } from "./BasePage";

import { selectDate } from "../Utils/dateUtils";

export class DummyTicketPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto(
      "https://www.dummyticket.com/dummy-ticket-for-visa-application/",
    );
  }

  // select product 
  async selectProduct() {
    await this.page.locator("#product_7441").check();
  }

  // select PayPal payment method
  async selectPayPal() {
    await this.page.locator("#payment_method_paypal").click();
  }

  //fill the first passenger details 
  async fillPassenger1(data: any) {
    await this.page.locator("#travname").fill(data.firstName);

    await this.page.locator("#travlastname").fill(data.lastName);

    const dob = this.page.locator("#dob");

    await expect(dob).toBeVisible();

    await dob.click();

    await selectDate(this.page, data.dob.year, data.dob.month, data.dob.day);

    await this.page.locator("#sex_2").check();
  }

  // add more passenger
  async addPassenger() {
    await this.page.locator("#addmorepax").check();

    await this.page.locator("#select2-addpaxno-container").click();

    const input = this.page.locator("input.select2-search__field");

    await input.fill("add 1 more passenger");

    await input.press("Enter");
  }

  // fill the another passenger details
  async fillPassenger2(data: any) {
    await this.page.locator("#travname2").fill(data.firstName);

    await this.page.locator("#travlastname2").fill(data.lastName);

    const dob = this.page.locator("#dob2");

    await dob.click();

    await selectDate(this.page, data.dob.year, data.dob.month, data.dob.day);

    await this.page.locator("#sex2_1").check();
  }

  // select passenger type
  async selectPassengerType() {
    await this.page.locator("#select2-paxtype2-container").click();

    const input = this.page.locator("input.select2-search__field");

    await input.fill("Child");

    await input.press("Enter");
  }

  // fill the travel details 
  async fillTravelDetails(data: any) {
    await this.page.locator("#traveltype_2").check();

    await this.page.locator("#fromcity").fill(data.from);

    await this.page.locator("#tocity").fill(data.to);
  }

  // fill the billing details
  async fillBillingDetails(data: any) {
    await this.page.locator("#billname").fill(data.name);

    await this.page.locator("#billing_phone").fill(data.phone);

    await this.page.locator("#billing_email").fill(data.email);

    await this.page.locator("#select2-billing_country-container").click();

    const input = this.page.locator("input.select2-search__field");

    await input.fill(data.country);

    await input.press("Enter");

    await this.page.locator("#billing_address_1").fill(data.address);

    await this.page.locator("#billing_postcode").fill(data.postcode);

    await this.page.locator("#billing_city").fill(data.city);
  }

  // add notes
  async addNotes(notes: string) {
    await this.page.locator("#notes").fill(notes);
  }

  //fill the card detils for the payment 
  async fillCardDetails() {
    const frame = this.page.frameLocator(
      "iframe[title='Secure payment input frame']",
    );

    await frame.locator("#payment-numberInput").fill("4242 4242 4242 4242");

    await frame.locator("#payment-expiryInput").fill("12 / 30");

    await frame.locator("#payment-cvcInput").fill("123");
  }

  // place the order 
  async placeOrder() {
    await this.page.locator("#place_order").click();
  }

  // verify the first name error is displayed if it it not filled
  async verifyFirstNameRequiredError() {
    const error = this.page.locator("#travname_description");

    await expect(error).toBeVisible();

    await expect(error).toContainText("First / Given name is a required field.");
  }

  // verify the last name error is displayed if it is not filled
  async verifyLastNameRequiredError() {
    const error = this.page.locator("#travlastname_description");

    await expect(error).toBeVisible();

    await expect(error).toContainText("Last / Surname is a required field.");
  }

  // verify the email error is dispalyed if it is not filled or missing 
  async verifyEmailRequiredError() {
    const error = this.page.locator("#billing_email_description");

    await expect(error).toBeVisible();

    await expect(error).toContainText("Billing Email address is a required field.");
  }

  // verify that the phone number is requird field and diplays error on missing
  async verifyPhoneRequiredError() {
    const error = this.page.locator("#billing_phone_description");

    await expect(error).toBeVisible();

    await expect(error).toContainText("Billing Phone is a required field.");
  }
}
