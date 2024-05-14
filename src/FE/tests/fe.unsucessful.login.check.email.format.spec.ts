import { expect, test} from '@playwright/test'

test('should show message: email not valid', async function({page}) {

    await page.goto(`${process.env.URL}/en/login`);

    await page.waitForTimeout(500)
    await page.locator('[id="email"]').fill('invalid@email')

    await page.waitForTimeout(1000)   
    await page.locator('[type="Submit"]').click()

    await page.waitForTimeout(5000)
    await expect(page.locator('.invalid-msg')).toHaveText('Please enter a valid email address.');
    await page.close()
})