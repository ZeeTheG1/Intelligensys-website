import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('should load contact form', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]');
    
    // Wait for contact form to be visible
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('form')).toBeVisible();
    
    // Check all form fields are present
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#company')).toBeVisible();
    await expect(page.locator('#message')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should show validation for required fields', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]');
    
    // Try to submit empty form
    await page.click('button[type="submit"]');
    
    // Check that browser validation prevents submission
    const nameField = page.locator('#name');
    const emailField = page.locator('#email');
    const messageField = page.locator('#message');
    
    await expect(nameField).toBeInvalid();
    await expect(emailField).toBeInvalid();
    await expect(messageField).toBeInvalid();
  });

  test('should fill and submit contact form', async ({ page }) => {
    // Navigate to contact section
    await page.click('a[href="#contact"]');
    
    // Fill out the form
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#company', 'Test Company');
    await page.fill('#message', 'This is a test message for the contact form.');
    
    // Submit the form
    await page.click('button[type="submit"]');
    
    // Wait for either success or error message
    const successMessage = page.locator('.bg-green-50');
    const errorMessage = page.locator('.bg-red-50');
    
    // Should show either success or error (depending on Supabase config)
    await expect(successMessage.or(errorMessage)).toBeVisible({ timeout: 10000 });
  });
});