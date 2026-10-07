import { test, expect } from '@playwright/test';

test('Navigate and locate elements on SauceDemo', async ({ page }) => {
  // 1. Navigate to the page
  await page.goto('https://www.saucedemo.com/');

  // 2. Locate by ID (#user-name)
  const usernameInput = page.locator('#user-name');
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill('standard_user');

  // 3. Locate by ID (#password)
  const passwordInput = page.locator('#password');
  await passwordInput.fill('secret_sauce');

  // 4. Locate by Class (.submit-button)
  const loginButton = page.locator('.submit-button');
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  // 5. Verify successful navigation
  await expect(page).toHaveURL(/.*inventory.html/);
});