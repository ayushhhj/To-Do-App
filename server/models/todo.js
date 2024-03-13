// import mongoose
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

// create a schema 
const TodoSchema = new mongoose.Schema({
    title: {                // type is string and is mandatory
        type: "String",
        required: true,
    },
    description: {          // description is string but not mandatory
        type: "String",
    },
    duration: {
        type: "String",
    }
});

// export the schema
const Todo  = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
