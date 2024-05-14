import { expect, test} from '@playwright/test'

test('should not log in, should show protection message: password mandatory', async function({page}) {

    await page.goto(`${process.env.URL}/en/login`);

    await page.waitForTimeout(500)
    await page.locator('[id="email"]').fill(process.env.LOGIN_EMAIL!)

    await page.waitForTimeout(1000)   
    await page.locator('[type="Submit"]').click()

    await page.waitForTimeout(5000)
    await expect(page.locator('.invalid-msg')).toHaveText('This field is required.');
    await page.close()
})