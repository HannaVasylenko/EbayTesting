//import { test, expect } from '@playwright/test';
//import { BrandOutletPage } from '../tests/pages/BrandOutletPage.js';
import { test, expect } from './fixtures/appFixtures.js';
import testData from '../tests/testDataCredentials/testData.json' assert { type: 'json' };

test.describe('Brand Outlet Page', () => {
  test('should open and verify Deals title', async ({ brandOutletPage }) => {
    await brandOutletPage.navigate();
    await brandOutletPage.verifyTitle(testData.brandOutletTitle);
  });
});
