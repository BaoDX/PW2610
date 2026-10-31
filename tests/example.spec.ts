import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test1', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByRole('link', { name: 'Quick Start' }).click();
  await page.locator('iframe[title="Sandbox Preview"]').first().contentFrame().getByRole('button', { name: 'I\'m a button' }).click();
  await page.getByRole('button', { name: 'Copy page' }).click();
});

test('test2', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByRole('link', { name: 'Quick Start' }).click();
  await page.locator('iframe[title="Sandbox Preview"]').first().contentFrame().getByRole('button', { name: 'I\'m a button' }).click();
  await page.getByRole('button', { name: 'Copy page' }).click();
  await page.getByRole('link', { name: 'API Reference', exact: true }).click();
  await page.getByRole('link', { name: 'Components' }).nth(3).click();
  await page.getByRole('article').getByRole('link', { name: '<Profiler>' }).click();
  await page.getByRole('button', { name: 'Copy page' }).click();
});
