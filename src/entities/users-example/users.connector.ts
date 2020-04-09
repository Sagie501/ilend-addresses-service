import Knex from 'knex';

export class UsersConnector {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async getAllUsers() {
    return this.knex.select('*').from('users');
  }
}
