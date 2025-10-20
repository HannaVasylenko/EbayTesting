import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';


export class SearchResultPage extends BasePage {
  constructor(page) {
    super(page, '/');
    this.searchTitle = page.locator('h1');
    this.searchField = page.locator('div#gh-ac-wrap input');

  }

  async verifySearchTitle(expectedKeyword) {
  await expect(
    (await this.searchTitle.textContent()).replace(/.*results for\s+/i, '').trim()
  ).toBe(expectedKeyword);
}

  async fillValueIntoSearchField(searchValue) {
    await this.searchField.type(searchValue);
    await this.searchField.press('Enter');
  }
}
