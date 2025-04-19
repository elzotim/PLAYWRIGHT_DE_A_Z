import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standarduser');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-password"]').dblclick();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
});