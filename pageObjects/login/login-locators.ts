import { Page, Locator } from "@playwright/test";


export const Locators = {
    // buttons
    signInBtn: (page: Page): Locator => page.getByRole('button', { name: 'Login', exact: true }),

    // inputs
    usernameInput: (page: Page): Locator => page.getByLabel('Email Address'),
    passwordInput: (page: Page): Locator => page.getByLabel('Password'),
};
