-- MySQL Workbench Forward Engineering
-- =====================================================
-- CREACIÓN DE BASE DE DATOS Y ESTRUCTURA
-- =====================================================

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `Kozmoz` DEFAULT CHARACTER SET utf8;
USE `Kozmoz`;

-- -----------------------------------------------------
-- Table: users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `names` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `creationDate` DATETIME NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table: category
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `category` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `names` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table: book
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `book` (
  `idBook` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `authors` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stock` INT NOT NULL,
  `creationDate` DATETIME NOT NULL,
  `category_idCategory` INT NOT NULL,
  PRIMARY KEY (`idBook`),
  INDEX `fk_book_category_idx` (`category_idCategory`),
  CONSTRAINT `fk_book_category`
    FOREIGN KEY (`category_idCategory`)
    REFERENCES `category` (`idCategory`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table: orders
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orders` (
  `idOrder` INT NOT NULL AUTO_INCREMENT,
  `orderDate` DATETIME NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `users_idUser` INT NOT NULL,
  PRIMARY KEY (`idOrder`),
  INDEX `fk_orders_users_idx` (`users_idUser`),
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`users_idUser`)
    REFERENCES `users` (`idUser`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table: orders_has_book
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `orders_has_book` (
  `orderItems` INT NOT NULL AUTO_INCREMENT,
  `orderId` INT NOT NULL,
  `bookId` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`orderItems`),
  INDEX `fk_ohb_orders_idx` (`orderId`),
  INDEX `fk_ohb_book_idx` (`bookId`),
  CONSTRAINT `fk_ohb_orders`
    FOREIGN KEY (`orderId`)
    REFERENCES `orders` (`idOrder`),
  CONSTRAINT `fk_ohb_book`
    FOREIGN KEY (`bookId`)
    REFERENCES `book` (`idBook`)
) ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;