-- Editing data for the SQL database backend for Snacc.io



-- Query for add a new character functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language

--Obtain data from any table
SELECT * FROM :tableInput;


-- Insert new values
INSERT INTO Recipes(recipeName, recipeDescription, recipeImageURL, recipeInstructions, cookingTime, views, rating, userID)
	VALUES(:nameInput, :descriptionInput, :imageURL, :instructionsInput, :cookingTimeInput, :viewsInput, :ratingInput, :userIDInput);

INSERT INTO Users(userName, email)
	VALUES(:userNameInput, :emailInput);

INSERT INTO Ingredients(ingredientName)
	VALUES(:ingredientNameInput);

INSERT INTO RecipesIngredients(ingredientID, recipeID)
	VALUES(:ingredientIDInput, :recipeIDInput);

INSERT INTO Reviews(rating, comment, imageURL, recipeID, userID)
	VALUES(:ratingInput, :commentInput, :imageURLInput, :recipeIDInput, :userIDInput);


-- Delete entries from tables:
DELETE FROM Recipes WHERE recipeID = :id_supplied_from_frontend;
DELETE FROM Users WHERE userID = :id_supplied_from_frontend;
DELETE FROM Ingredients WHERE ingredientID = :id_supplied_from_frontend;
DELETE FROM Reviews WHERE reviewID = :id_supplied_from_frontend;
DELETE FROM RecipeIngredients WHERE 
	recipeID = :recipeID_supplied_from_frontend 
	AND ingredientID = :ingredientID_supplied_from_frontend;


-- UPDATE data for an entry:
UPDATE Recipes
SET
	recipeName = :recipeNameInput,
	recipeDescription = :recipeDescriptionInput,
	recipeImageURL = :recipeImageURLInput,
	recipeInstructions = :recipeInstructionsInput,
	cookingTime = :cookingTimeInput,
    views = :viewsInput,
    rating = :ratingInput,
	userID = :userIDInput
WHERE
    recipeID = :id_supplied_from_frontend;


UPDATE Users
SET
    userName = :userNameInput,
    email = :emailInput
 WHERE userID = :id_supplied_from_frontend;


UPDATE Ingredients
SET
    ingredientName = :ingredientNameInput
WHERE ingredientID = :id_supplied_from_frontend;



UPDATE Reviews
SET
    rating = :ratingInput,
    comment = :commentInput,
	imageURL = :imageURLInput,
	recipeID = :recipeIDInput
WHERE reviewID = :id_supplied_from_frontend;


-- No need to update RecipeIngredients table