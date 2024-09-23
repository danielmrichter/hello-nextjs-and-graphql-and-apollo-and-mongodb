// MongoDB Data Source for Users
import ToDoModel from "./models";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";

interface ToDoDocument {
  _id: ObjectId;
  description: String;
  complete: Boolean;
}

export default class ToDos extends MongoDataSource<ToDoDocument> {
  // Function to fetch all users
  async getAllToDos() {
    try {
      return await ToDoModel.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }

  // Function to create a new user
  async createToDo({ input }: any) {
    try {
      return await ToDoModel.create({ ...input });
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }
}