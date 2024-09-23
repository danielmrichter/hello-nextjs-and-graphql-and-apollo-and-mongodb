const resolvers = {
  Query: {
    ToDos: async (
      _: any,
      __: any,
      context: { dataSources: { todos: { getAllToDos: () => any } } }
    ) => {
      try {
        return await context.dataSources.todos.getAllToDos();
      } catch (error) {
        throw new Error("Failed to fetch todos");
      }
    },
  },
  Mutation: {
    createToDo: async (_: any, { input }: any, context: any) => {
      try {
        const newToDo = await context.dataSources.todos.createToDos({
          input,
        });
        return newToDo;
      } catch (error) {
        throw new Error("Failed to create todo");
      }
    },
  },
};

export default resolvers;