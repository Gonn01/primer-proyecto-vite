import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String },
  address: { type: Object },
  company: { type: Object },
  img: { type: String },
});
export const User = mongoose.model("User", UserSchema);
