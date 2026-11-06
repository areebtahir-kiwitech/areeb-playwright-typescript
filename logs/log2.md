# Playwright with TypeScript – Progress Log

**Date:** 6 November 2026  
**Project:** Todo Automation Practice

## 1. Changes made to the project

### Implemented Page Object Model (POM)
- Introduced a `TodoPage` class to organise TodoMVC page interactions.
- Created a constructor to receive and store the Playwright `Page` object.
- Used `this.page` to access the browser page across class methods.
- Moved existing `addTodo()`, `checkTodo()` and `deleteTodo()` helper functions into the `TodoPage` class.
- Created a reusable `getTodoItem()` method to centralise todo item locator logic.
- Added TypeScript types, including `Page` and `Locator`.

### Refactored test cases
- Updated test cases to use methods from the `TodoPage` class.
- Removed repeated locator definitions from individual tests.
- Kept browser actions and assertions separate.
- Retained assertions in test files rather than placing them inside page methods.

## 2. Topics covered

- Page Object Model and its purpose.
- Difference between helper functions and POM.
- TypeScript classes, constructors and the `this` keyword.
- Class properties and methods.
- Returning Playwright locators from methods.
- Reusable locator methods.
- Custom Playwright fixtures and `base.extend()`.
- Fixture setup and the `use()` function.
- Built-in versus custom fixtures.
