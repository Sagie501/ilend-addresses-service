import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    getAllCountries: [String]
    getCitiesByCountry(countryName: String!): [String]
    getCitiesByCountries(countriesNames: [String]!): [String]
  }
`;
