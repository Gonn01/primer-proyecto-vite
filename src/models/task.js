import mongoose from "mongoose";
import { Schema } from "mongoose";

const TaskSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  address: { type: Object },
  company: { type: Object },
  img: { type: String },
});
export const Task = mongoose.model("Task", TaskSchema);
