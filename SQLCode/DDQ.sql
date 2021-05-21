-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 14, 2021 at 06:17 AM
-- Server version: 10.4.18-MariaDB-log
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs340_keel`
--

-- --------------------------------------------------------

--
-- Table structure for table `Ingredients`
--

DROP TABLE IF EXISTS `Ingredients`;
CREATE TABLE `Ingredients` (
  `ingredientID` int(11) NOT NULL,
  `ingredientName` varchar(63) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Ingredients`
--

INSERT INTO `Ingredients` (`ingredientID`, `ingredientName`) VALUES
(1, 'Potato');

-- --------------------------------------------------------

--
-- Table structure for table `RecipeIngredients`
--

DROP TABLE IF EXISTS `RecipeIngredients`;
CREATE TABLE `RecipeIngredients` (
  `ingredientID` int(11) NOT NULL,
  `recipeID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `RecipeIngredients` (`ingredientID`, `recipeID`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Recipes`
--

DROP TABLE IF EXISTS `Recipes`;
CREATE TABLE `Recipes` (
  `recipeID` int(11) NOT NULL,
  `recipeName` varchar(255) NOT NULL,
  `recipeDescription` varchar(511) NOT NULL,
  `recipeImageURL` varchar(255) DEFAULT NULL,
  `recipeInstructions` varchar(4095) DEFAULT NULL,
  `cookingTime` float NOT NULL,
  `views` int(10) UNSIGNED DEFAULT 0,
  `rating` float DEFAULT NULL,
  `userID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Recipes`
--

INSERT INTO `Recipes` (`recipeID`, `recipeName`, `recipeDescription`, `recipeImageURL`, `recipeInstructions`, `cookingTime`, `views`, `rating`, `userID`) VALUES
(1, 'Baked Potato', 'A potato baked in the oven', 'http://placekitten.com/100/100', 'Bake a potato in the oven', 20, 2, 5, 51325);

-- --------------------------------------------------------

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
CREATE TABLE `Reviews` (
  `reviewID` int(11) NOT NULL,
  `rating` tinyint(3) UNSIGNED NOT NULL,
  `comment` varchar(1023) DEFAULT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  `recipeID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Reviews`
--

INSERT INTO `Reviews` (`reviewID`, `rating`, `comment`, `imageURL`, `recipeID`, `userID`) VALUES
(1, 4, 'It was delicious', 'http://placekitten.com/100/100', 1, 51325),
(2, 4, 'I hated it', 'http://placekitten.com/100/100', 1, 51326),
(3, 1, 'My grandma\'s favorite', 'http://placekitten.com/100/100', 1, 51327);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `userID` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`userID`, `username`, `email`) VALUES
(51325, 'potatoBaker78', 'john@example.com'),
(51326, 'bestCookEver', 'sally@example.com'),
(51327, 'masterChef', 'GordanRamsey@example.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Ingredients`
--
ALTER TABLE `Ingredients`
  ADD PRIMARY KEY (`ingredientID`);

--
-- Indexes for table `RecipeIngredients`
--
ALTER TABLE `RecipeIngredients`
  ADD PRIMARY KEY (`ingredientID`,`recipeID`),
  ADD KEY `recipeID` (`recipeID`);

--
-- Indexes for table `Recipes`
--
ALTER TABLE `Recipes`
  ADD PRIMARY KEY (`recipeID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `Reviews`
--
ALTER TABLE `Reviews`
  ADD PRIMARY KEY (`reviewID`),
  ADD KEY `recipeID` (`recipeID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Ingredients`
--
ALTER TABLE `Ingredients`
  MODIFY `ingredientID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Recipes`
--
ALTER TABLE `Recipes`
  MODIFY `recipeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Reviews`
--
ALTER TABLE `Reviews`
  MODIFY `reviewID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51328;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `RecipeIngredients`
--
ALTER TABLE `RecipeIngredients`
  ADD CONSTRAINT `RecipeIngredients_ibfk_1` FOREIGN KEY (`ingredientID`) REFERENCES `Ingredients` (`ingredientID`),
  ADD CONSTRAINT `RecipeIngredients_ibfk_2` FOREIGN KEY (`recipeID`) REFERENCES `Recipes` (`recipeID`);

--
-- Constraints for table `Recipes`
--
ALTER TABLE `Recipes`
  ADD CONSTRAINT `Recipes_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`);

--
-- Constraints for table `Reviews`
--
ALTER TABLE `Reviews`
  ADD CONSTRAINT `Reviews_ibfk_1` FOREIGN KEY (`recipeID`) REFERENCES `Recipes` (`recipeID`),
  ADD CONSTRAINT `Reviews_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `Users` (`userID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
