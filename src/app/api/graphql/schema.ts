const typeDefs = `#graphql
  type ToDo {
    id: ID!
    description: String!
    complete: Boolean
}
  
  input NewToDoInput {
    description: String!
  }
  type Query {
    ToDos: [ToDo]
  }
  type Mutation {
    createToDo(input: NewToDoInput!): ToDo
  }
`;

export default typeDefs;