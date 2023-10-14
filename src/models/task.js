import mongoose from "mongoose";
import { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
export const Task = mongoose.model("Task", TaskSchema);
