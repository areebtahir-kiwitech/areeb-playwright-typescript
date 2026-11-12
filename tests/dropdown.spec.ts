import {test,expect} from '@playwright/test'

//Dropdown Test
test('Select Option 2',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    await page.locator('#dropdown').selectOption('Option 2')
    await expect(page.locator('#dropdown')).toHaveValue('2')
})

test('Select Option 1',async ({page}) => {
     await page.goto('https://the-internet.herokuapp.com/dropdown')
     const drop= page.locator('#dropdown')
     await drop.selectOption({
        label:'Option 1'
     })
     await expect(drop).toHaveValue('1')
})

test('Select G1 O1', async ({ page }) => {
    console.log('Step 1: Navigating');
    await page.goto('https://demoqa.com/select-menu');
    console.log('Step 2: Finding dropdown');
    const dropBtn = page.locator('#withOptGroup');
    await dropBtn.click();
    console.log('Step 3: Dropdown opened');
    await page.getByText('Group 1, option 1', {
        exact: true
    }).click();
    console.log('Step 4: Option selected');
    await expect(page.locator('#withOptGroup'))
        .toContainText('Group 1, option 1');
    console.log('Step 5: Assertion passed');
});