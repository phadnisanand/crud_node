const {
  getTodos,
  getTodosById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./controllers/Todo");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/todos", getTodos);
router.get("/todos/:todoID", getTodosById);
router.post("/todos", createTodo);
router.put("/todos/:todoID", updateTodo);
router.delete("/todos/:todoID", deleteTodo);

module.exports = router;
