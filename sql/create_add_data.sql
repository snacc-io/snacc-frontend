-- a) Data Definion Queries:

CREATE TABLE `Recipes` (
    `recipeID` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
    `recipeName` varchar(255) NOT NULL,
    `recipeDescription` varchar(255),
    `ingredientsDisplay` varchar(255),
    `instructions` varchar(255),
    `cookingTime` TIME NOT NULL,
    `views` int(11) NOT NULL,
    `rating` FLOAT,
    `userID` int(11),
    CONSTRAINT PRIMARY KEY(`recipeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




CREATE TABLE `Users` (
    `userID` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
    `userName` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    CONSTRAINT PRIMARY KEY(`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `Ingredients` (
    `ingredientID` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
    `ingredientName` varchar(255) NOT NULL,
    CONSTRAINT PRIMARY KEY(`ingredientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `RecipesIngredients` (
    `ingredientID` int(11) NOT NULL,
    `recipeID` int(11) NOT NULL,
    CONSTRAINT PK_Name PRIMARY KEY(`ingredientID`,`recipeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `Reviews` (
    `reviewID` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
    `recipeID` int(11) NOT NULL,
    `userID` int(11) NOT NULL,
    `rating` int(11) NOT NULL,
    `comment` varchar(255),
    `image` BLOB,
    CONSTRAINT PRIMARY KEY(`reviewID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- b) Sample Data


INSERT INTO `Recipes` VALUES (1,"potatoes","A delicious tuber that grows underground","test","boil for 20 min", "00:20:00",0,3.5,1);


INSERT INTO `Users` VALUES (1,"gordan ramsey","gordan@test.com");

INSERT INTO `Ingredients` VALUES (1,"Potato");

INSERT INTO `RecipesIngredients` VALUES (1,1);

INSERT INTO `Reviews` VALUES (1,1,1,2,"Delicious",NULL);