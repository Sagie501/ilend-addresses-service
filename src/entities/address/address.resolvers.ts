export const resolvers = {
  Query: {
    getAllCountries: async (source, args, { dataSources }) => {
      return await dataSources.addressConnector.getAllCountries();
    },
    getCitiesByCountry: async (source, args, { dataSources }) => {
      return await dataSources.addressConnector.getCitiesByCountry(args.countryName);
    }
  }
};
