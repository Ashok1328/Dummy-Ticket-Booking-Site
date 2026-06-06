import { Page } from "@playwright/test";

export async function selectDate(
  page: Page,
  targetYear: string,
  targetMonth: string,
  targetDate: string,
) {
  const monthMap: Record<string, string> = {
    January: "0",
    February: "1",
    March: "2",
    April: "3",
    May: "4",
    June: "5",
    July: "6",
    August: "7",
    September: "8",
    October: "9",
    November: "10",
    December: "11",
  };

  await page.locator(".ui-datepicker-year").selectOption({ value: targetYear });

  await page
    .locator(".ui-datepicker-month")
    .selectOption({ value: monthMap[targetMonth] });

  const dateLocator = page
    .locator(".ui-datepicker-calendar tbody tr td a")
    .filter({ hasText: targetDate });
  await dateLocator.click();
}
