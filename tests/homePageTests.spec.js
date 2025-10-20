import { test, expect } from './fixtures/appFixtures.js';
import { HomePage } from '../tests/pages/HomePage.js';
import testData from '../tests/testDataCredentials/testData.json' assert { type: 'json' };

test.describe.serial('Home Page Tests', () => {
  let homePage;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    homePage = new HomePage(page);

    await homePage.navigate();
  });

  test('Verify home page URL', async () => {
    await homePage.verifyUrl();
  });

  test('Verify category window opens', async () => {
    await homePage.clickOnCategoryMenu();
    await homePage.verifyCategoryWindowOpens();
  });

  test('Verify select category', async () => {
    await homePage.selectCategoryFromMenu(testData.categoryName);
    await homePage.verifySelectedCategoryOpens(testData.categoryName);
  });
});


