import { resolvers as addressResolver } from '../entities/address/address.resolvers';
import * as _ from 'lodash';

export const rootResolvers = _.merge(addressResolver);
