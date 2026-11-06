import { type Page } from "@playwright/test";

export class TodoPage{
    page:Page

    constructor(page:Page){
        this.page=page
    }

    async addTodo(todo:string){
        const input = this.page.getByRole('textbox', {
        name: 'What needs to be done?'})
        await input.fill(todo)
        await input.press('Enter')
    }

    async checkTodo(todo:string){
        const todoItem=this.page.locator('.todo-list li').filter({
            hasText:todo
        })
        await todoItem.locator('.toggle').check()
    }

    async deleteTodo(todo:string) {
       const todoItem=this.page.locator('.todo-list li').filter({
            hasText:todo
        })
        await todoItem.hover()
        await todoItem.locator('.destroy').click()
    }

    getTodoItem(todo:string) {
     return this.page.locator('.todo-list li').filter({
        hasText:todo
    })    
    }

}