import { expect, test} from '@playwright/test'

test('should not log in, should show message: email and password no matched', async function({page}) {

    await page.goto(`${process.env.URL}/en/login`);

    await page.waitForTimeout(500)
    await page.locator('[id="email"]').fill(process.env.LOGIN_EMAIL!)

    await page.waitForTimeout(500)
    await page.locator('[id="password"]').fill('Pass_123')

    await page.waitForTimeout(1000)   
    await page.locator('[type="Submit"]').click()

    await page.waitForTimeout(5000)
    await expect(page.locator('.invalid-msg')).toHaveText('Your password is incorrect.');
    await expect(page.locator('[type="Submit"]')).toBeVisible() //check if we're still on same page
    await page.close()
})
