import mongoose from "mongoose";

const URI = "mongodb://localhost/tasks";

mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

export default mongoose;
