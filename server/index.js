const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const config = require("./config/config");

const db = mysql.createConnection(config);

db.connect((err) => {
  if (err) console.log("Error connecting to Database", err);
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/:table", (req, res) => {
  const SQLQuery = `SELECT * FROM ${req.params.table};`;

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.post("/api/:table/Insert", (req, res) => {
  const SQLQuery = `INSERT INTO ${req.params.table}(recipeID, recipeName, recipeDescription, recipeImageURL, recipeInstructions, cookingTime, views, rating, userID) VALUES(${req.body.recipeID}, \"${req.body.recipeName}\", \"${req.body.recipeDescription}\", \"${req.body.recipeImageURL}\", \"${req.body.recipeInstructions}\", ${req.body.cookingTime}, ${req.body.views}, ${req.body.rating}, ${req.body.userID});`;

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/:table/Delete", (req, res) => {
  const SQLQuery = `DELETE FROM ${req.params.table} WHERE recipeID = ${req.body.id};`;

  db.query(SQLQuery, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
