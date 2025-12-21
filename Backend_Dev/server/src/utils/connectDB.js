import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ✅`);
  } catch (error) {
    console.log(error);
    console.log("Connection faild..❌");
    process.exit(1);
  }
};

export default connectDB;
