import mongoose from "mongoose";
import * as dotenv from "dotenv"
const dbConnection = async () => {
    try {
            const connection = await mongoose.connect(process.env.MONGODB_URL);
            console.log("Database connected successfully")
        } catch (error) {
            console.log(error);
        }
}
export default dbConnection;