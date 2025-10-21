//import { test, expect } from '@playwright/test';
//import { BrandOutletPage } from '../tests/pages/BrandOutletPage.js';
import { test, expect } from './fixtures/appFixtures.js';
import testData from './testDataCredentials/testData.json' assert { type: 'json' };

test.describe('Global Deals Page', () => {
  test('should open and verify Deals title', async ({ globalDealsPage }) => {
    await globalDealsPage.navigate();
    await globalDealsPage.verifyTitle(testData.globalDealsTitle);
  });
});
