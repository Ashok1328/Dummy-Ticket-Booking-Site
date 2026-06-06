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

  async selectProduct() {
    await this.page.locator("#product_7441").check();
  }

  async fillPassenger1(data: any) {
    await this.page.locator("#travname").fill(data.firstName);

    await this.page.locator("#travlastname").fill(data.lastName);

    const dob = this.page.locator("#dob");

    await expect(dob).toBeVisible();

    await dob.click();

    await selectDate(this.page, data.dob.year, data.dob.month, data.dob.day);

    await this.page.locator("#sex_2").check();
  }

  async addPassenger() {
    await this.page.locator("#addmorepax").check();

    await this.page.locator("#select2-addpaxno-container").click();

    const input = this.page.locator("input.select2-search__field");

    await input.fill("add 1 more passenger");

    await input.press("Enter");
  }

  async fillPassenger2(data: any) {
    await this.page.locator("#travname2").fill(data.firstName);

    await this.page.locator("#travlastname2").fill(data.lastName);

    const dob = this.page.locator("#dob2");

    await dob.click();

    await selectDate(this.page, data.dob.year, data.dob.month, data.dob.day);

    await this.page.locator("#sex2_1").check();
  }

  async selectPassengerType() {
    await this.page.locator("#select2-paxtype2-container").click();

    const input = this.page.locator("input.select2-search__field");

    await input.fill("Child");

    await input.press("Enter");
  }

  async fillTravelDetails(data: any) {
    await this.page.locator("#traveltype_2").check();

    await this.page.locator("#fromcity").fill(data.from);

    await this.page.locator("#tocity").fill(data.to);
  }

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

  async addNotes(notes: string) {
    await this.page.locator("#notes").fill(notes);
  }

  async fillCardDetails() {
    const frame = this.page.frameLocator(
      "iframe[title='Secure payment input frame']",
    );

    await frame.locator("#payment-numberInput").fill("4242 4242 4242 4242");

    await frame.locator("#payment-expiryInput").fill("12 / 30");

    await frame.locator("#payment-cvcInput").fill("123");
  }

  async placeOrder() {
    await this.page.locator("#place_order").click();
  }

  async verifyFirstNameRequiredError() {
    const error = this.page.locator("#travname_error");

    await expect(error).toBeVisible();

    await expect(error).toHaveText("This field is required.");
  }

  async verifyLastNameRequiredError() {
    const error = this.page.locator("#travlastname_error");

    await expect(error).toBeVisible();

    await expect(error).toHaveText("This field is required.");
  }

  async verifyEmailRequiredError() {
    const error = this.page.locator("#billing_email_error");

    await expect(error).toBeVisible();

    await expect(error).toHaveText("This field is required.");
  }

  async verifyPhoneRequiredError() {
    const error = this.page.locator("#billing_phone_error");

    await expect(error).toBeVisible();

    await expect(error).toHaveText("This field is required.");
  }
}
