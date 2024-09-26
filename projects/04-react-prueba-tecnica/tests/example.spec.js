// @ts-check
import { test, expect } from '@playwright/test'
import { before } from 'node:test';

const LOCALHOST_URL = 'localhost:5173'

test('get started link', async ({ page }) => {
  await page.goto(LOCALHOST_URL);
  
  const beforeClick  = await page.getByTestId('texto').textContent();

  // Click the get started link. 
  await page.getByTestId('boton').click({ force: true });

  await page.waitForResponse(res => res.status() === 200)

  const afterClick = await page.getByTestId('texto').textContent();
  console.log({beforeClick, afterClick});
  await expect(beforeClick  != afterClick).toBeTruthy();

});
