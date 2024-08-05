import { LoginPage } from './../../pageObjects/login/login-page';
import { test, expect } from '@playwright/test';
import { commonMethods } from '../../common-functions/common';


let common: commonMethods;
let login: LoginPage;

test.beforeEach(async ({ page }, testInfo) => {
  common = new commonMethods(page, testInfo)
  login = new LoginPage(page);
});

test.describe('Login Page Scenarios', async () => {
  test('Successful Login', async ({ page }) => {
    await login.goto();
    await login.fillCredentials(process.env.ADMIN!, process.env.PASSWORD!);
    await login.signIn();
    await page.waitForURL(process.env.URL!);
    await common.addScreenshot("Signed in");
  });

  test('Unsuccessful Login', async ({ page }) => {
    await login.goto();
    await login.fillCredentials(process.env.ADMIN!, "IncorrectPassword");
    await login.signIn();
    await expect(page.getByText('Incorrect Email or Password')).toBeVisible();
    await common.addScreenshot("Invalid");
  });

  test('Email Format Validation', async ({ page }) => {
    await login.goto();
    await login.fillCredentials("InvalidEmail", "IncorrectPassword");
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
    await common.addScreenshot("Email validation");
  });

  test('Emtpy Field Validation', async ({ page }) => {
    await login.goto();
    await login.usernameInput.click()
    await login.passwordInput.click()
    await login.usernameInput.click()
    await expect(page.getByText('Please fill in your email')).toBeVisible();
    await expect(page.getByText('Please enter a password')).toBeVisible();
    await common.addScreenshot("Field validation");
  });
})