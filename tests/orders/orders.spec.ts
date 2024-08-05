import { MyAccountPage } from '../../pageObjects/my-account/my-account-page';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObjects/login/login-page';
import { commonMethods } from '../../common-functions/common';
import { HomePage } from '../../pageObjects/home/home-page';


let common: commonMethods;
let login: LoginPage;
let home: HomePage
let account: MyAccountPage

test.beforeEach(async ({ page }, testInfo) => {
  common = new commonMethods(page, testInfo)
  login = new LoginPage(page);
  home = new HomePage(page);
  account = new MyAccountPage(page);
});

test('Add Product to Cart - 2', async ({ page }) => {
  // await login.loginFull();
  // const productName = 'Sunlight';
  // await home.searchProduct(productName);
  // await home.addToCartCardBtn.click();
  // await home.viewCart();
  // await expect(page.getByText(productName)).toBeVisible();
});

// test('View Order history', async ({ page }) => {
//   await login.loginFull();
//   await home.viewMyAccount();
//   await common.addScreenshot("Account")
//   await account.viewOrders();
//   await expect(page.getByText('Orders Placed')).toBeVisible();
//   await common.addScreenshot("Orders")
// });

// test('View Invoices', async ({ page }) => {
//   await login.loginFull();
//   await home.viewMyAccount();
//   await common.addScreenshot("Account")
//   await account.viewInvoices();
//   await expect(page.getByRole('heading', { name: 'Invoices' })).toBeVisible()
//   await common.addScreenshot("Orders")
// });