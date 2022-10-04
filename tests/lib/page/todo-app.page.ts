import { expect, Locator, Page } from '@playwright/test';

export class TodoAppPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly viewLabel: Locator;


  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.locator('.new-todo');
    this.viewLabel = page.locator('.view label');
  }

  async goto() {
    await this.page.goto(`${process.env.MAIN_URL}/todomvc`);
  }

  async createFirstTodo(todoItem) {
    // Create 1st todo.
    await this.newTodo.fill(todoItem);
    await this.newTodo.press('Enter');

    // Make sure the list only has one todo item.
    await expect(this.viewLabel).toHaveText([
      todoItem
    ]);
  }

  async createSecondTodo(todoItemOne,todoItemTwo) {
    // Create 2nd todo.
    await this.newTodo.fill(todoItemTwo);
    await this.newTodo.press('Enter');

    // Make sure the list now has two todo items.
    await expect(this.viewLabel).toHaveText([
      todoItemOne,
      todoItemTwo
    ]);

  }

}