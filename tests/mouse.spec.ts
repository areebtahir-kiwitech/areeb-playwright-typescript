import {test,expect} from "@playwright/test"

test('Hovers',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/hovers')
    const profile1=page.locator('.figure').first()
    await profile1.hover()
    await expect(profile1.locator('.figcaption')).toBeVisible()
})

test('contains usertext',async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers')
    const profile1=page.locator('.figure').first()
    await profile1.hover()
    await expect(profile1.locator('.figcaption>h5')).toHaveText('name: user1')
})

test('drag and drop',async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    const boxA=page.locator('#column-a')
    const boxB=page.locator('#column-b')
    await boxA.dragTo(boxB)
    await expect(boxA).toHaveText('B');
    await expect(boxB).toHaveText('A');
})