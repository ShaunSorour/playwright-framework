import { commonMethods } from '../../common-functions/common';
import { test, expect } from '@playwright/test';


let common: commonMethods;

test.beforeEach(async ({ page }, testInfo) => {
  common = new commonMethods(page, testInfo)
});

test.describe('Google Home Scenarios', async () => {
  test('URL test', async ({ page }) => {
    await page.goto('https://www.google.co.uk/');
    await common.addScreenshot("Home-page");
    expect(page.url()).toBe("https://www.google.co.uk/");
  });

  test('Another test with steps', async ({ page }) => {
    await test.step('Go to google', async () => {
      await page.goto('https://www.google.co.uk/');
      await common.addScreenshot("Home-page");
    });
    await test.step('Assert URL', async () => {
      expect(page.url()).toBe("https://www.google.co.uk/");
    });
  });
})

test.describe('GitHub tests', async () => { 
  test('Team offerings', async ({ page }) => {
    await test.step('View offerings', async () => {
      await page.goto('https://github.com/');
      expect(page.url()).toBe("https://github.com/");
      await common.addScreenshot("Home-page");
    });
    await test.step('Teams offerings', async () => {
      await page.getByRole('button', { name: 'Solutions' }).click(); 
      await common.addScreenshot("One");
      await page.getByRole('link', { name: 'Teams' }).click();
      await common.addScreenshot("Two");
      await page.getByRole('link', { name: 'Get started with Team' }).first().click()
      console.log('Current URL:', await page.url());
      await expect(page.getByText('create your user account')).toBeVisible();
      await common.addScreenshot("Three");
    });
  });
})