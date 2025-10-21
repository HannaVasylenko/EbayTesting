import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class GlobalDealsPage extends BasePage {
  constructor(page) {
    super(page, '/globaldeals');
    this.title = page.locator('h1');
  }

  async verifyTitle(expectedTitle) {
    await expect(this.title).toHaveText(expectedTitle);
  }
}
