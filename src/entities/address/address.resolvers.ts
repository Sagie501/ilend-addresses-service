export const resolvers = {
  Query: {
    getAllCountries: (source, args, { dataSources }) => {
      return dataSources.addressConnector.getAllCountries();
    },
    getCitiesByCountry: (source, args, { dataSources }) => {
      return dataSources.addressConnector.getCitiesByCountry(args.countryName);
    }
  }
};
