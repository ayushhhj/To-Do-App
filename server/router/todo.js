// import express
const express = require("express");

// initialize router
const router = express.Router();

// import all methods
const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo")

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTodo);  // get method to import all todo

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post("/", postCreateTodo);  // post method to create a new todo

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateTodo); // put method to update a todo

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteTodo); // delete method to delete todo

module.exports = router; // export router