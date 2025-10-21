//import { test, expect } from '@playwright/test';
//import { BrandOutletPage } from '../tests/pages/BrandOutletPage.js';
import { test, expect } from './fixtures/appFixtures.js';
import testData from '../tests/testDataCredentials/testData.json' assert { type: 'json' };

test.describe('Brand Outlet Page', () => {
  test('verify Brand Outlet title on the page', async ({ brandOutletPage }) => {
    await brandOutletPage.navigate();
    await brandOutletPage.navigateToBrandOutletPage();
    await brandOutletPage.verifySearchTitle(testData.brandOutletTitle);
  });
});