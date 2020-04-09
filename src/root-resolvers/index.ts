import { resolvers as booksResolver } from '../entities/books-example/books.resolvers';
import { resolvers as usersResolver } from '../entities/users-example/users.resolvers';
import * as _ from 'lodash';

export const rootResolvers = _.merge(booksResolver, usersResolver);
