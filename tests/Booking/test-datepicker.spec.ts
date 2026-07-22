import { test } from "@playwright/test";

test("Check validation errors with PayPal", async ({ page }) => {
  await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
  
  // Select product
  await page.locator("#product_7441").check();
  
  // Click PayPal radio button
  console.log("Clicking PayPal radio...");
  // Let's locate the PayPal option. It's usually label for payment_method_paypal or input[value="paypal"]
  const paypalRadio = page.locator("#payment_method_paypal");
  await paypalRadio.click();
  
  // Click Place Order (which becomes "Proceed to PayPal")
  console.log("Clicking place order/proceed to paypal...");
  await page.locator("#place_order").click();
  
  // Wait for the WooCommerce error alert to be visible
  await page.waitForSelector(".woocommerce-error", { state: "visible", timeout: 10000 });
  
  // Get all error messages text
  const errors = await page.locator(".woocommerce-error li").allTextContents();
  console.log("ERRORS FOUND:", errors);
});
