import { Page, Locator } from "@playwright/test";


export const Locators = {
    // buttons
    addToCartCardBtn: (page: Page): Locator => page.locator('.product-card-module_add-to-cart-button-wrapper_3HLmD > .button').first(),
    cartBtn: (page: Page): Locator => page.locator('button').filter({ hasText: /\d/ }).first(),
    logoutBtn: (page: Page): Locator => page.getByRole('button', { name: 'Logout' }),
    myAccountBtn: (page: Page): Locator => page.getByRole('button', { name: 'My Account' }),
    wishlistBtn: (page: Page): Locator => page.getByLabel('wishlist'),

    // inputs
    searchInput: (page: Page): Locator => page.getByPlaceholder('Search for products, brands...'),
}
