import { typeDefs as addressTypeDefs } from '../entities/address/address.schema';
import { gql } from 'apollo-server-express';
import { mergeTypeDefs } from '@graphql-tools/merge';

export const rootTypeDefs = gql`${mergeTypeDefs([addressTypeDefs], {
  useSchemaDefinition: true,
  forceSchemaDefinition: true,
  throwOnConflict: true,
  commentDescriptions: true,
  reverseDirectives: true
})}`;
