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

app.post("/api/Ingredients/Insert", (req, res) => {
  const SQLQuery = `INSERT INTO Ingredients (
      ingredientID,
      ingredientName
    ) 
    VALUES(
      ${req.body.ingredientID}, 
      \"${req.body.ingredientName}\"
    );`;

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/Recipes/Insert", (req, res) => {
  const SQLQuery = `INSERT INTO Recipes(recipeID, recipeName, recipeDescription, recipeImageURL, recipeInstructions, cookingTime, views, rating, userID) 
    VALUES(${req.body.recipeID}, \"${req.body.recipeName}\", \"${req.body.recipeDescription}\", \"${req.body.recipeImageURL}\", \"${req.body.recipeInstructions}\", ${req.body.cookingTime}, ${req.body.views}, ${req.body.rating}, ${req.body.userID});`;

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/RecipesIngredients/Insert", (req, res) => {
  const SQLQuery = `INSERT INTO RecipesIngredients(ingredientID, recipeID)
	VALUES(${req.body.ingredientID}, ${req.body.recipeID});`;

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/Reviews/Insert", (req, res) => {
  const SQLQuery = `INSERT INTO Reviews(rating, comment, imageURL, recipeID, userID)
	VALUES(${req.body.rating}, ${req.body.comment}, ${req.body.imageURL}, ${req.body.recipeID}, ${req.body.userID}, );`;

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/Users/Insert", (req, res) => {
  const SQLQuery = `INSERT INTO Users (userID, username, email) 
    VALUES(${req.body.userID}, \"${req.body.username}\", \"${req.body.email}\");`;

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/Ingredients/Delete", (req, res) => {
  const SQLQuery = `DELETE FROM Ingredients 
  WHERE ingredientID = ${req.body.id};`;

  db.query(SQLQuery, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/api/Recipes/Delete", (req, res) => {
  const SQLQuery = `DELETE FROM Recipes 
  WHERE recipeID = ${req.body.id};`;

  db.query(SQLQuery, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/api/RecipesIngredients/Delete", (req, res) => {
  const SQLQuery = `DELETE FROM RecipesIngredients 
  WHERE recipeID = ${req.body.recipeID} AND ingredientID = ${req.body.ingredientsID};`;

  db.query(SQLQuery, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/api/Reviews/Delete", (req, res) => {
  const SQLQuery = `DELETE FROM Reviews 
  WHERE reviewID = ${req.body.reviewID}`;

  db.query(SQLQuery, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/api/Users/Delete", (req, res) => {
  const SQLQuery = `DELETE FROM Users 
  WHERE userID = ${req.body.id};`;

  db.query(SQLQuery, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/api/Ingredients/Update", (req, res) => {
  //prettier-ignore-start
  const SQLQuery = `UPDATE Ingredients
  SET
  ingredientName = \"${req.body.ingredientName}\"
  WHERE ingredientID = ${req.body.ingredientID};`;
  //prettier-ignore-end
  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/Recipes/Update", (req, res) => {
  //prettier-ignore-start
  const SQLQuery = `UPDATE Recipes
  SET
    recipeName = \"${req.body.recipeName}\",
    recipeDescription = \"${req.body.recipeDescription}\",
    recipeImageURL = \"${req.body.recipeImageURL}\",
    recipeInstructions = \"${req.body.recipeInstructions}\",
    views = ${req.body.views},
    cookingTime = ${req.body.rating},
    userID = ${req.body.userID}
  WHERE
      recipeID = ${req.body.recipeID};`;
  //prettier-ignore-end
  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/RecipesIngredients/Update", (req, res) => {
  //prettier-ignore-start
  const SQLQuery = `UPDATE RecipesIngredients
  SET
  ingredientID = ${req.body.ingredientID},
  recipeID = ${req.body.recipeID}
  WHERE ingredientID = ${req.body.ingredientID} and recipeID = ${req.body.recipeID};`;
  //prettier-ignore-end
  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/Reviews/Update", (req, res) => {
  //prettier-ignore-start
  const SQLQuery = `UPDATE Reviews
  SET
      rating = ${req.body.rating},
      comment = \"${req.body.comment}\",
      imageURL = \"${req.body.imageURL}\",
      recipeID = \"${req.body.recipeID}\"
  WHERE reviewID = ${req.body.reviewID};`;
  //prettier-ignore-end
  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.post("/api/Users/Update", (req, res) => {
  //prettier-ignore-start
  const SQLQuery = `UPDATE Users
  SET
      userName = :\"${req.body.username}\",
      email = \"${req.body.email}\"
   WHERE userID = ${req.body.userID};`;
  //prettier-ignore-end

  db.query(SQLQuery, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
