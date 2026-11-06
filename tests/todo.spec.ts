import { test,expect,type Page } from "@playwright/test";
import {TodoPage } from "../pages/TodoPage";
test.beforeEach(async ({page}) => {
    console.log('Hook Before Each running')
    await page.goto('')
})


test('Add a new todo item',async ({page})=>{
    const myTodo='Learn Playwright'
    const todoPage=new TodoPage(page)
    await todoPage.addTodo(myTodo)
    await expect(page.getByText(myTodo)).toBeVisible()
})

test('Add two todo items',async ({page})=>{
    const todoPage=new TodoPage(page)
    await todoPage.addTodo('first test')
    await todoPage.addTodo('second test')
    await expect(page.getByText('first test')).toBeVisible()
    await expect(page.getByText('second test')).toBeVisible()
} )

test('verify the task is completed',async ({page})=>{
    const todoPage=new TodoPage(page)
    await todoPage.addTodo('first test')
    await todoPage.checkTodo('first test')
    const todoItem=todoPage.getTodoItem('first test')
    await expect(todoItem).toHaveClass(/completed/)
})

test('verify delete',async({page})=>{
    const todoPage=new TodoPage(page)
    await todoPage.addTodo('first test')
    await todoPage.deleteTodo('first test')
    const todoItem=todoPage.getTodoItem('first test')
    await expect(todoItem).toHaveCount(0)
})

test('Add, complete and delete',async ({page}) => {
    const todoPage=new TodoPage(page)
    await todoPage.addTodo('Playwright Actions')
    await todoPage.addTodo('Learn Typescript')
    await todoPage.checkTodo('Playwright Actions')
    await expect(todoPage.getTodoItem('Playwright Actions')).toHaveClass(/completed/)
    await todoPage.deleteTodo('Learn Typescript')
    await expect(todoPage.getTodoItem('Learn Typescript')).toHaveCount(0)
})