import { typeDefs as addressTypeDefs } from '../entities/address/address.schema';
import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';

export const rootTypeDefs = gql`${mergeTypes([addressTypeDefs])}`;
