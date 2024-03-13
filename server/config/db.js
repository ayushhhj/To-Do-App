//import mongoose
const mongoose = require("mongoose");

//import MONGO URI
const db = "mongodb+srv://ayushjoshi:ayush343@cluster0.npfwhqh.mongodb.net/?retryWrites=true&w=majority";

//connect to db
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

//export connect method to be called in server.js
module.exports = connectDB;
