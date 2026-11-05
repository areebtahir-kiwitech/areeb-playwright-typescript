# Playwright with TypeScript – Progress Log

**Date:** 5 November 2026  
**Project:** Todo Automation Practice

## 1. Changes made to the test file

The initial test file contained repeated code for common operations. The following changes were made to improve code reusability and readability.

**Common setup using `beforeEach()`**
- Added a `test.beforeEach()` hook to navigate to the TodoMVC application before each test.
- Configured `baseURL` in `playwright.config.ts` to avoid repeating the full application URL.

**Created reusable helper functions**

Moved repeated operations into separate functions:

- `addTodo(page, todo)` – Adds a new todo item.
- `checkTodo(page, todo)` – Marks a specific todo as completed.
- `deleteTodo(page, todo)` – Deletes a specific todo item.

**TypeScript**
- Added the Playwright `Page` type to helper function parameters.
- Used typed function parameters such as `todo: string`.

**Actions and assertions**
- Kept actions inside reusable helper functions.
- Kept assertions separately inside individual test cases to verify the expected results.

## 2. Test cases implemented

| Test case | Description |
|---|---|
| Add a new todo item | Verify that a new todo can be added |
| Add two todo items | Verify multiple todo creation |
| Verify task completion | Verify that a todo can be marked completed |
| Verify delete | Verify that a todo can be deleted |
| Add, complete and delete | Verify multiple operations in sequence |

## 3. Topics covered

- Playwright test structure and execution.
- Fixtures and the `page` object.
- `test.beforeEach()` hook.
- Playwright configuration and `baseURL`.
- URL resolution with `page.goto()`.
- Locators: `getByRole()`, `getByPlaceholder()` and `locator()`.
- Filtering locators using `filter({ hasText })`.
- Browser actions: `fill()`, `press()`, `check()`, `hover()` and `click()`.
- Assertions: `toBeVisible()`, `toHaveClass()` and `toHaveCount()`.
- Asynchronous functions and `async/await`.
- TypeScript types and reusable functions.
