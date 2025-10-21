import { BasePage } from './BasePage.js';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page) {
    super(page, '/');
    this.categoryTab = page.locator('div.gh-categories');
    this.categoryWindow = page.locator("//div[@class='gh-categories']/div");
    this.categoryTitle = page.locator('h1.page-title');
    this.shippingLocationButton = page.locator("//div[@class='gh-ship-to']/button");
    this.listShippingLocationsButton = page.locator("//span[@class='menu-button']/button");
    this.closeButtonShippingLocationWindow = page.locator("button.shipto__close-btn");
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

  async selectShippingLocation(country) {
    const shippingLocation = this.page.locator(`//span[@data-country-text='${country}']`);
    await this.shippingLocationButton.click();
    await this.listShippingLocationsButton.click();
    await shippingLocation.click();
  }

  async verifySelectedShippingLocation(country) {
    const selectedShippingLocation = this.page.locator(`//div[@class='flag-wrapper']/following-sibling::span[text()='${country}']`);
    await expect(selectedShippingLocation).toHaveText(country);
    await this.closeButtonShippingLocationWindow.click();
  }
}
