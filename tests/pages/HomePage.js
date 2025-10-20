import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page) {
    super(page, '/');
    this.categoryTab = page.locator('div.gh-categories');
    this.categoryWindow = page.locator("//div[@class='gh-categories']/div");
    this.categoryTitle = page.locator('h1.page-title');
  }

  async verifyUrl(expectedPath = this.url) {
    const currentUrl = this.page.url();
    await expect(currentUrl).toContain(expectedPath);
  }

  async clickOnCategoryMenu() {
    await this.categoryTab.click();
  }

  async verifyCategoryWindowOpens() {
    await expect(this.categoryWindow).toHaveClass(/is-active/);
  }

  async selectCategoryFromMenu(categoryName) {
    const categoryLocator = this.page.locator(`//h3[text()='${categoryName}']`);
    await categoryLocator.click();
  }

  async verifySelectedCategoryOpens(categoryName) {
    await expect(this.categoryTitle).toHaveText(categoryName);
  }
}
