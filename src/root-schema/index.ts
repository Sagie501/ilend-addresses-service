import { typeDefs as booksTypeDefs } from '../entities/books-example/books.schema';
import { typeDefs as usersTypeDefs } from '../entities/users-example/users.schema';
import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';

export const rootTypeDefs = gql`${mergeTypes([booksTypeDefs, usersTypeDefs])}`;
