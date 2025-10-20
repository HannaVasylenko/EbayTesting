//import { test, expect } from '@playwright/test';
//import { BrandOutletPage } from '../tests/pages/BrandOutletPage.js';
import { test, expect } from './fixtures/appFixtures.js';
import testData from '../tests/testDataCredentials/testData.json' assert { type: 'json' };

test.describe('Search Result Page', () => {
  test('should open and verify Deals title', async ({ searchResultPage }) => {
    await searchResultPage.navigate();
    await searchResultPage.fillValueIntoSearchField(testData.searchTitle);
    await searchResultPage.verifySearchTitle(testData.searchTitle);
  });
});
