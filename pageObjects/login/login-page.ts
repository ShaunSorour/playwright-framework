import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from '../base/base-page';
import { login } from '../../common-functions/urls';
import { Locators } from './login-locators';


export class LoginPage extends BasePage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.usernameInput = Locators.usernameInput(page)
        this.passwordInput = Locators.passwordInput(page);
        this.signInBtn = Locators.signInBtn(page)
    }

    async goto() {
        await this.page.goto(process.env.URL! + login);
    }

    async fillCredentials(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }

    async signIn() {
        await this.signInBtn.click();
    }

    async loginFull() {
        await this.page.goto(process.env.URL! + login);
        await this.usernameInput.fill(process.env.ADMIN!);
        await this.passwordInput.fill(process.env.PASSWORD!);
        await this.signInBtn.click();
        await this.page.waitForURL(process.env.URL!);
        // bot detection
        await this.page.waitForTimeout(2000)
    }
}