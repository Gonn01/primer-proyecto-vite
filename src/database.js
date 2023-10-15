import mongoose from "mongoose";
// nombre de la db a la que me voy a conectar
const URI = "mongodb://localhost/users";

mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

export default mongoose;
