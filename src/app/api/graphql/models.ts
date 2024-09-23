const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  // Define user fields here matching the GraphQL schema
  description: { type: String, required: [true, "All fields are required"] },
  complete: Boolean,
});

export default mongoose.models.ToDoModel || mongoose.model("ToDoModel", todoSchema);