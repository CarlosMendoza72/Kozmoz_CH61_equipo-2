-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Kozmoz
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Kozmoz
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Kozmoz` DEFAULT CHARACTER SET utf8 ;
USE `Kozmoz` ;

-- -----------------------------------------------------
-- Table `Kozmoz`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Kozmoz`.`users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `names` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `creationDate` DATETIME NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Kozmoz`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Kozmoz`.`orders` (
  `idOrder` INT NOT NULL AUTO_INCREMENT,
  `orderDate` DATETIME NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `users_idUser` INT NOT NULL,
  PRIMARY KEY (`idOrder`),
  INDEX `fk_orders_users_idx` (`users_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`users_idUser`)
    REFERENCES `Kozmoz`.`users` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Kozmoz`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Kozmoz`.`category` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `names` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Kozmoz`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Kozmoz`.`book` (
  `idBook` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `authors` VARCHAR(100) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `stock` INT NOT NULL,
  `creationDate` DATETIME NOT NULL,
  `category_idCategory` INT NOT NULL,
  PRIMARY KEY (`idBook`),
  INDEX `fk_book_category1_idx` (`category_idCategory` ASC) VISIBLE,
  CONSTRAINT `fk_book_category1`
    FOREIGN KEY (`category_idCategory`)
    REFERENCES `Kozmoz`.`category` (`idCategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Kozmoz`.`orders_has_book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Kozmoz`.`orders_has_book` (
  `orderItems` INT NOT NULL AUTO_INCREMENT,
  `orderId` INT NOT NULL,
  `bookId` INT NOT NULL,
  `quantity` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`orderItems`),
  INDEX `fk_orders_has_book_book1_idx` (`bookId` ASC) VISIBLE,
  INDEX `fk_orders_has_book_orders1_idx` (`orderId` ASC) VISIBLE,
  CONSTRAINT `fk_orders_has_book_orders1`
    FOREIGN KEY (`orderId`)
    REFERENCES `Kozmoz`.`orders` (`idOrder`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_has_book_book1`
    FOREIGN KEY (`bookId`)
    REFERENCES `Kozmoz`.`book` (`idBook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
