import { test,expect,type Page } from "@playwright/test";

test.beforeEach(async ({page}) => {
    console.log('Hook Before Each running')
    await page.goto('')
})

async function addTodo(page:Page,todo:string) {
    const input= page.getByRole('textbox', { name: 'What needs to be done?' })
    await input.fill(todo)
    await input.press('Enter')
    console.log(`Added ${todo}`)
}

async function checkTodo(page:Page,todo:string) {
    const todoItem=page.locator('.todo-list li').filter({
        hasText:todo
    })

    await todoItem.locator('.toggle').check()
}

async function deleteTodo(page:Page,todo:string) {
    const todoItem=page.locator('.todo-list li').filter({
        hasText:todo
    })
    await todoItem.hover()
    await todoItem.locator('.destroy').click()
}


test('Add a new todo item',async ({page})=>{
    const myTodo='Learn Playwright'
    await addTodo(page,myTodo)

    await expect(page.getByText(myTodo)).toBeVisible()
})

test('Add two todo items',async ({page})=>{
    await addTodo(page,'first test')
    await addTodo(page,'second test')
    await expect(page.getByText('first test')).toBeVisible()
    await expect(page.getByText('second test')).toBeVisible()
} )

test('verify the task is completed',async ({page})=>{
    await addTodo(page,'first test')

    await checkTodo(page,'first test')

    const todoItem=page.locator('.todo-list li').filter({
        hasText:'first test'
    })
    await expect(todoItem).toHaveClass(/completed/)
})

test('verify delete',async({page})=>{
    
    await addTodo(page,'first test')
    await deleteTodo(page,'first test')

    const todoItem=page.locator('.todo-list').filter({
        hasText:'first test'
    })
    await expect(todoItem).toHaveCount(0)
})

test('Add, complete and delete',async ({page}) => {
    
    await addTodo(page,'Playwright Actions')

    await addTodo(page,'Learn Typescript')
    await checkTodo(page,'Playwright Actions')
    const todoCheckbox=page.locator('.todo-list li').filter({
        hasText:'Playwright Actions'
    })
    await expect(todoCheckbox).toHaveClass(/completed/)

    await deleteTodo(page,'Learn Typescript')
    const delCheckbox=page.locator('.todo-list li').filter({
        hasText:'Learn Typescript'
    })

    await expect(delCheckbox).toHaveCount(0)
})