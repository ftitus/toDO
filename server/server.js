const PORT = process.env.PORT ?? 8000;
const express = require("express");
const app = express();
const pool = require("/.db");

//get all todos
app.get("/todos", async (req, res) => {
  const userEmail = "samplecoder.com";

  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));