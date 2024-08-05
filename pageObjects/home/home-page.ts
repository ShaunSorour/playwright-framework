import { cart } from '../../common-functions/urls';
import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base/base-page';
import { Locators } from './home-locators';


export class HomePage extends BasePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly logoutBtn: Locator;
    readonly myAccountBtn: Locator;
    readonly wishlistBtn: Locator;
    readonly cartBtn: Locator;
    readonly addToCartCardBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.searchInput = Locators.searchInput(page)
        this.logoutBtn = Locators.logoutBtn(page)
        this.myAccountBtn = Locators.myAccountBtn(page)
        this.wishlistBtn = Locators.wishlistBtn(page)
        this.cartBtn = Locators.cartBtn(page)
        this.addToCartCardBtn = Locators.addToCartCardBtn(page)
    };

    async goto() {
        await this.page.goto(process.env.URL!);
    };

    async viewMyAccount() {
        await this.myAccountBtn.click();
    };

    async viewWishlist() {
        await this.wishlistBtn.click();
    };

    async viewCart() {
        await this.cartBtn.click();
        await this.page.waitForURL(process.env.URL! + cart)
    };

    async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchInput.press('Enter');
    };
}