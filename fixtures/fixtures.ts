import {test as base} from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

type MyFixture={
    todoPage:TodoPage
}

export const test=base.extend<MyFixture>({
    todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);

    await use(todoPage);
}
})

export { expect } from "@playwright/test";