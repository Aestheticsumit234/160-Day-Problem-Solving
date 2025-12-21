import app from "./src/app.js";
import connectDB from "./src/utils/connectDB.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 9000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
