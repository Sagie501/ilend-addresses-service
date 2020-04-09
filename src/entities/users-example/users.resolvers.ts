export const resolvers = {
  Query: {
    users: async (source, args, { dataSources }) => {
      return await dataSources.seedDataSource.usersConnector.getAllUsers();
    },
  }
};
