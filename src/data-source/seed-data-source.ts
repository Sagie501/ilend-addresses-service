import { SQLDataSource } from './sql-data-source';
import Knex from 'knex';
import { BooksConnector } from '../entities/books-example/books.connector';
import { UsersConnector } from '../entities/users-example/users.connector';

export class SeedDataSource extends SQLDataSource {
  public booksConnector: BooksConnector;
  public usersConnector: UsersConnector;

  constructor(knexConfig: Knex.Config) {
    super(knexConfig);

    this.booksConnector = new BooksConnector(this.knex);
    this.usersConnector = new UsersConnector(this.knex);
  }
}
