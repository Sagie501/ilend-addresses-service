import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { rootResolvers } from './root-resolvers';
import { rootTypeDefs } from './root-schema';
import { Environment } from './environment/environment';
import { Config } from './environment/config';
import { buildFederatedSchema } from '@apollo/federation';
import { AddressConnector } from './entities/address/address.connector';

const app = express();

const config: Config = Environment.getConfig();

const addressConnector = new AddressConnector();
const server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs: rootTypeDefs,
    resolvers: rootResolvers
  }]),
  dataSources: () => {
    return {
      addressConnector
    };
  }
});
server.applyMiddleware({ app });

app.listen({ port: config.port }, () => {
  console.log(`${config.serviceName} ready at port: ${config.port}`)
});
