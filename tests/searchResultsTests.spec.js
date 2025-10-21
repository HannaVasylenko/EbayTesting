//import { test, expect } from '@playwright/test';
//import { BrandOutletPage } from '../tests/pages/BrandOutletPage.js';
import { test, expect } from './fixtures/appFixtures.js';
import testData from '../tests/testDataCredentials/testData.json' assert { type: 'json' };

test.describe('Search Result Page', () => {
  test('verify Deals title on the page', async ({ searchResultPage }) => {
    await searchResultPage.navigate();
    await searchResultPage.fillValueIntoSearchField(testData.searchTitle);
    await searchResultPage.verifySearchTitle(testData.searchTitle);
  });
});
