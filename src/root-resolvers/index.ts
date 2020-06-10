import { resolvers as addressResolver } from '../entities/address/address.resolvers';
import { mergeResolvers } from '@graphql-tools/merge';

export const rootResolvers = mergeResolvers([addressResolver]);
