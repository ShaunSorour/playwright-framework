import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base/base-page';
import { Locators } from './my-account-locators';


export class MyAccountPage extends BasePage {
    readonly page: Page;
    readonly ordersBtn: Locator;
    readonly invoicesBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.ordersBtn = Locators.ordersBtn(page);
        this.invoicesBtn = Locators.invoicesBtn(page);
    }

    async goto() {
        await this.page.goto(process.env.URL! + '/account');
    }

    async viewOrders() {
        await this.ordersBtn.click();
    }

    async viewInvoices() {
        await this.invoicesBtn.click();
    }
}