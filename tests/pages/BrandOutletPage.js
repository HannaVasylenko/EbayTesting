import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';


export class BrandOutletPage extends BasePage {
  constructor(page) {
    super(page, '/');
    this.brandOutletTitle = page.locator("h1.page-title");
    this.brandOutletTab = page.locator("//a[@aria-label='Brand Outlet']");

  }

  async verifySearchTitle(title) {
  await expect(this.brandOutletTitle).toHaveText(title);
}

  async navigateToBrandOutletPage() {
    await this.brandOutletTab.click();
  }
}