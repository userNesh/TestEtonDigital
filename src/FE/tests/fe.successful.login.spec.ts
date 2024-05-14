import { expect, test} from '@playwright/test'

test('should successfully log in', async function({page}) {

    await page.goto(`${process.env.URL}/en/login`);

    await page.waitForTimeout(500)
    await page.locator('[id="email"]').fill(process.env.LOGIN_EMAIL!)

    await page.waitForTimeout(500)
    await page.locator('[id="password"]').fill(process.env.LOGIN_PASSWORD!)

    await page.waitForTimeout(1000)   
    await page.locator('[type="Submit"]').click()

    await page.waitForTimeout(5000)
    await expect(page.locator("div.c-homepage__heading>h1")).toHaveText('My storage listings');
    await page.close()
})