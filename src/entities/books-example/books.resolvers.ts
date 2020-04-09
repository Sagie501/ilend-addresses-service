export const resolvers = {
  Query: {
    books: async (source, args, { dataSources }) => {
      return await dataSources.seedDataSource.booksConnector.getAllBooks();
    },
  }
};
