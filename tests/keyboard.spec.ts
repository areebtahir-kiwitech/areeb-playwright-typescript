import {test,expect} from '@playwright/test'

test('Press Enter',async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses?')
    const input=page.locator('#target')
    await input.press('Enter')
    await expect(page.locator('#result')).toHaveText('You entered: Enter')
})

test('Combine Keys',async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses?')
    const input=page.locator('#target')
    await input.fill('Playwright Automation')
    await input.press('Control+A')
    await input.press('Backspace')
    await expect(input).toHaveValue('');
})