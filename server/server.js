require("dotenv").config(); // import dotenv

const express = require("express"); // import express

const cors = require("cors"); // import cors

const connectDB = require("./config/db"); // import connectDB from config/db.js

const app = express(); // initialize app using express

//routes
const todo = require("./router/todo")

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({extended: false})); // allows server to handle json inputs in HTTP requests. extended: false uses the built-in querystring lib. to parse JSON

app.get("/", (req, res) => res.send("Server up and running")); // assigns response as "server up and running" when root URL (http://localhost:8000) is accessed.

// use routes
app.use("/api/todo", todo);

// setting up server port
const PORT = process.env.PORT || 8000; // sets PORT to the port value in env variable or 8000 (default)

app.listen(PORT, () => {console.log(`server is running on http://localhost:${PORT}`);}); // when the server starts, it logs a message to the console indicating the server's URL.