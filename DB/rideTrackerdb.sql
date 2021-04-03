-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema rideTrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `rideTrackerdb` ;

-- -----------------------------------------------------
-- Schema rideTrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rideTrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `rideTrackerdb` ;

-- -----------------------------------------------------
-- Table `Ride`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Ride` ;

CREATE TABLE IF NOT EXISTS `Ride` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(10000) NOT NULL,
  `miles` INT NOT NULL,
  `bike_used` VARCHAR(45) NULL,
  `time_hours` INT NULL,
  `time_minutes` INT NULL,
  `deleted` TINYINT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS rideuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'rideuser'@'localhost' IDENTIFIED BY 'rideuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'rideuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Ride`
-- -----------------------------------------------------
START TRANSACTION;
USE `rideTrackerdb`;
INSERT INTO `Ride` (`id`, `title`, `description`, `miles`, `bike_used`, `time_hours`, `time_minutes`, `deleted`) VALUES (1, 'MA to TX', 'Moved to tx and it was the only way to get my bike there. Best ride of my life', 1972, '2011 FatBoy', 84, 24, 0);
INSERT INTO `Ride` (`id`, `title`, `description`, `miles`, `bike_used`, `time_hours`, `time_minutes`, `deleted`) VALUES (0, 'Tail of the Dragon', '318 curves in just 11 miles! Not for beginner riders', 11, '2011 FatBoy', 0, 30, 0);
INSERT INTO `Ride` (`id`, `title`, `description`, `miles`, `bike_used`, `time_hours`, `time_minutes`, `deleted`) VALUES (3, 'Daytona to Charleston', 'This was just a boring highway ride ', 327, '2012 Sportster 72', 5, 2, 0);
INSERT INTO `Ride` (`id`, `title`, `description`, `miles`, `bike_used`, `time_hours`, `time_minutes`, `deleted`) VALUES (4, 'Daytona to Miami', 'Nice Ride down the FLorida coast with the ocean by your side', 200, '2012 Sportster 72', 3, 56, 0);

COMMIT;

