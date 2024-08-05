import { Page, Locator } from "@playwright/test";


export const Locators = {
    // buttons
    invoicesBtn: (page: Page): Locator => page.getByRole('link', { name: 'Invoices' }).nth(1),
    ordersBtn: (page: Page): Locator => page.getByRole('link', { name: 'Orders' }).nth(1),
};
