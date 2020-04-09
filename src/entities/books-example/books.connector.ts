import Knex from 'knex';

export class BooksConnector {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async getAllBooks() {
    return this.knex
        .select('*')
        .from('books');
  }
}
