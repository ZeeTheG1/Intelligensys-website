import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');
  
  // Check if the page title is correct
  await expect(page).toHaveTitle(/Intelligensys/);
  
  // Check if main navigation elements are present
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('nav')).toBeVisible();
});

test('hero section is visible', async ({ page }) => {
  await page.goto('/');
  
  // Check if hero section is present
  await expect(page.locator('main')).toBeVisible();
  
  // Check for hero content (adjust selectors based on actual implementation)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('all main sections are present', async ({ page }) => {
  await page.goto('/');
  
  // Wait for page to load completely
  await page.waitForLoadState('networkidle');
  
  // Check that main sections are rendered
  // Note: These selectors may need adjustment based on actual component implementation
  const sections = ['header', 'main', 'footer'];
  
  for (const section of sections) {
    await expect(page.locator(section)).toBeVisible();
  }
});

test('contact form is accessible', async ({ page }) => {
  await page.goto('/');
  
  // Look for contact form elements
  // Note: Adjust selectors based on actual form implementation
  const contactForm = page.locator('form');
  
  if (await contactForm.count() > 0) {
    await expect(contactForm).toBeVisible();
    
    // Check for form inputs (adjust based on actual form fields)
    const nameInput = page.locator('input[name="name"], input[placeholder*="name" i]');
    const emailInput = page.locator('input[name="email"], input[type="email"]');
    
    if (await nameInput.count() > 0) {
      await expect(nameInput.first()).toBeVisible();
    }
    
    if (await emailInput.count() > 0) {
      await expect(emailInput.first()).toBeVisible();
    }
  }
});

test('navigation is responsive', async ({ page }) => {
  // Test desktop view
  await page.setViewportSize({ width: 1200, height: 800 });
  await page.goto('/');
  
  await expect(page.locator('header')).toBeVisible();
  
  // Test mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/');
  
  await expect(page.locator('header')).toBeVisible();
});