-- Editing data for the SQL database backend for Snacc.io



-- Query for add a new character functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

-- Insert new values
INSERT INTO `Recipes`(recipeName, recipeDescription, ingredientsDisplay, instructions, cookingTime, views, rating, userID)
VALUES (:recipeNameInput, :recipeDescriptionInput, :ingredientsDisplayInput, :instructionsInput, :cookingTimeInput, :viewsInput, :ratingInput, :userIDInput);

INSERT INTO `Users` (userName, email) 
VALUES (:userNameInput, :emailInput);

INSERT INTO `Ingredients` (ingredientName) 
VALUES (:ingredientNameInput);

INSERT INTO `RecipesIngredients` (ingredientID, recipeID) 
VALUES (:ingredientIDInput, :recipeIDInput);

INSERT INTO `Reviews` (recipeID, userID, rating, comment, image) 
VALUES (:recipeIDInput, :userIDInput, :ratingInput, :commentInput, :imageInput);


-- Select all data to display in dropdowns
SELECT * FROM Recipes;
SELECT * FROM Users;
SELECT * FROM Ingredients;
SELECT * FROM RecipesIngredients;
SELECT * FROM Reviews;

-- Select a specific recipe to display on the fronent:

SELECT * FROM Recipes WHERE recipName = :recipeNameInput_from_frontend;
-- Delete entries from tables:

DELETE FROM Recipes WHERE recipeID = :id_supplied_from_frontend;
DELETE FROM Users WHERE userID = :id_supplied_from_frontend;
DELETE FROM Ingredients WHERE ingredientID = :id_supplied_from_frontend;
DELETE FROM Reviews WHERE reviewID = :id_supplied_from_frontend;
--  DELETE FROM RecipeIngredients WHERE (Not sure yet how to select composite key)


-- UPDATE data for an entry:
UPDATE Recipes 
SET 
    recipeName = :recipeNameInput,
    recipeDescription = :recipeDescriptionInput, 
    ingredientsDisplay = :ingredientsDisplayInput, 
    instructions = :instructionsInput, 
    cookingTime = :cookingTimeInput, 
    views = :viewsInput, 
    rating = :ratingInput, 
    userID = :userIDInput 
WHERE
    recipeID = id_supplied_from_frontend;


UPDATE Users 
SET 
    userName = :userNameInput,
    email = :emailInput
 WHERE userID = id_supplied_from_frontend;


UPDATE Ingredients 
SET 
    ingredientName = :ingredientNameInput 
WHERE ingredientID = id_supplied_from_frontend;



UPDATE Reviews 
SET 
    recipeID = :recipeIDInput,
    userID = :userIDInput,
    rating = :ratingInput,
    comment = :commentInput,
    image = :imageInput
WHERE reviewID = id_supplied_from_frontend;


-- No need to update RecipeIngredients table