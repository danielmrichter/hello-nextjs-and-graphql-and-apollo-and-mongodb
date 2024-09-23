import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import ToDos from "./datasource";
import ToDosModel from './models'

const uri = process.env.MONGODB_CONNECTION_STRING;

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("� connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
connectDB();


const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {
      todos: new ToDos({ modelOrCollection: ToDosModel }),
    },
  }),
});
export async function GET(request: NextRequest) {
  return handler(request);
}
export async function POST(request: NextRequest) {
  return handler(request);
} 