-- Editing data for the SQL database backend for Snacc.io



-- Query for add a new character functionality with colon : character being used to 
-- denote the variables that will have data from the backend programming language



-- Insert new values
INSERT INTO Recipes(recipeName, recipeDescription, recipeImageURL, recipeInstructions, cookingTime, userID)
	VALUES(:nameInput, :descriptionInput, :imageURL, :instructionsInput, :cookingTimeInput, :userIDInput);

INSERT INTO Users(userName, email)
	VALUES(:userNameInput, :emailInput);

INSERT INTO Ingredients(ingredientName)
	VALUES(:ingredientNameInput);

INSERT INTO RecipesIngredients(ingredientID, recipeID)
	VALUES(:ingredientIDInput, :recipeIDInput);

INSERT INTO Reviews(rating, comment, image, recipeID, userID)
	VALUES(:ratingInput, :commentInput, :imageInput, :recipeIDInput, :userIDInput);



-- Select a specific recipe to display on the frontend:
-- Selecting recipe details for id_supplied_from_frontend.
SELECT r.recipeName AS title, r.recipeDescription AS description, recipeImageURL AS image, u.username AS author, r.views AS views, r.rating AS rating, r.cookingTime AS cookingTime, r.recipeInstructions AS instructionList, reviews FROM Recipes r
	INNER JOIN Users u ON r.userID = u.userID 
WHERE recipeID = id_supplied_from_frontend;

-- Selecting reviews for id_supplied_from_frontend
SELECT u.userName, r.image, r.rating, r.comment FROM Reviews r
	INNER JOIN Users u ON r.userID = u.userID
WHERE recipeID = id_supplied_from_frontend;

-- Selecting ingredients for id_supplied_from_frontend
SELECT i.ingredientName FROM Ingredients i 
	INNER JOIN RecipeIngredients ri ON i.recipeID = ri.recipeID
WHERE recipeID = id_supplied_from_frontend;

-- Count reviews for id_supplied_from_frontend
SELECT COUNT(recipeID) AS reviewsCount FROM Reviews WHERE recipeID = id_supplied_from_frontend;

-- Count rating for id_supplied_from_frontend
SELECT COUNT(recipeID) AS ratingCount FROM Reviews WHERE recipeID = id_supplied_from_frontend;

-- Count photos for id_supplied_from_frontend
--not needed for an admin



-- Delete entries from tables:

DELETE FROM Recipes WHERE recipeID = :id_supplied_from_frontend;
DELETE FROM Users WHERE userID = :id_supplied_from_frontend;
DELETE FROM Ingredients WHERE ingredientID = :id_supplied_from_frontend;
DELETE FROM Reviews WHERE reviewID = :id_supplied_from_frontend;
DELETE FROM RecipeIngredients WHERE 
	recipeID = :id_supplied_from_frontend 
	AND ingredientID = (SELECT ingredientID FROM Ingredeints WHERE ingredientName = :ingredientName_supplied_from_frontend);


-- UPDATE data for an entry:
UPDATE Recipes
SET
	recipeName = :recipeNameInput,
	recipeDescription = :recipeDescriptionnput,
	recipeImageURL = :recipeImageURLnput,
	recipeInstructions = :recipeInstructionsnput,
	cookingTime = :cookingTimenput,
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
    image = :imageInput
WHERE reviewID = :id_supplied_from_frontend;


-- No need to update RecipeIngredients table