RUN
npx playwright test
npx playwright test --ui

RUN NPM
npm test

RUN SPECIFIC
npx playwright test example.spec.ts --ui

RUN FOLDER
testDir in playwright.config
npx playwright test orders

REPORT
npx playwright show-report

HARD TIMEOUT
await page.waitForTimeout(2000)