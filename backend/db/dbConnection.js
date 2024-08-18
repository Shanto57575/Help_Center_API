import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const mongodb_Connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGODB CONNECTED ✅ Connection HOST : ", mongodb_Connection.connection?.host)
    } catch (error) {
        console.log(error)
    }
}

export default dbConnect