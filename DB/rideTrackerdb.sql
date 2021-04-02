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
-- Table `Rides`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Rides` ;

CREATE TABLE IF NOT EXISTS `Rides` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `miles` INT NULL,
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
-- Data for table `Rides`
-- -----------------------------------------------------
START TRANSACTION;
USE `rideTrackerdb`;
INSERT INTO `Rides` (`id`, `miles`) VALUES (1, 100);

COMMIT;

