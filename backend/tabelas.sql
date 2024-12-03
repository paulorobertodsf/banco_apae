-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`funcoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`funcoes` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `especialidade` VARCHAR(45) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`funcionarios` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `id_funcao` INT NOT NULL,
  `usuario` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_funcionario_funcoes_idx` (`id_funcao` ASC) VISIBLE,
  CONSTRAINT `fk_funcionario_funcoes`
    FOREIGN KEY (`id_funcao`)
    REFERENCES `mydb`.`funcoes` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`estados` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `uf` VARCHAR(2) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`cidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cidades` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `id_estado` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_cidades_estados_idx` (`id_estado` ASC) VISIBLE,
  CONSTRAINT `fk_cidades_estados`
    FOREIGN KEY (`id_estado`)
    REFERENCES `mydb`.`estados` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`enderecos` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `rua` VARCHAR(45) NULL,
  `bairro` VARCHAR(45) NULL,
  `id_cidade` INT NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_cidade_enderecos_idx` (`id_cidade` ASC) VISIBLE,
  CONSTRAINT `fk_cidade_enderecos`
    FOREIGN KEY (`id_cidade`)
    REFERENCES `mydb`.`cidades` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`alunos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`alunos` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `id_endereco` INT NOT NULL,
  `data_nascimento` DATE NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_alunos_enderecos_idx` (`id_endereco` ASC) VISIBLE,
  CONSTRAINT `fk_alunos_enderecos`
    FOREIGN KEY (`id_endereco`)
    REFERENCES `mydb`.`enderecos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`horarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`horarios` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `inicio` TIMESTAMP NOT NULL,
  `fim` TIMESTAMP NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`salas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`salas` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`status` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`consultas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`consultas` (
  `id_profissional` INT NOT NULL,
  `id_aluno` INT NOT NULL,
  `observacao` VARCHAR(45) NULL,
  `data` TIMESTAMP NOT NULL,
  `id_horario` INT NOT NULL,
  `id_sala` INT NOT NULL,
  `id_status` INT NOT NULL,
  INDEX `fk_consultas_funcoes_idx` (`id_profissional` ASC) VISIBLE,
  INDEX `fk_consultas_alunos_idx` (`id_aluno` ASC) VISIBLE,
  PRIMARY KEY (`id_profissional`, `id_aluno`),
  INDEX `fk_consultas_horarios_idx` (`id_horario` ASC) VISIBLE,
  INDEX `fk_consultas_salas_idx` (`id_sala` ASC) VISIBLE,
  INDEX `fk_consultas_status_idx` (`id_status` ASC) VISIBLE,
  CONSTRAINT `fk_consultas_funcoes`
    FOREIGN KEY (`id_profissional`)
    REFERENCES `mydb`.`funcionarios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultas_alunos`
    FOREIGN KEY (`id_aluno`)
    REFERENCES `mydb`.`alunos` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultas_horarios`
    FOREIGN KEY (`id_horario`)
    REFERENCES `mydb`.`horarios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultas_salas`
    FOREIGN KEY (`id_sala`)
    REFERENCES `mydb`.`salas` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_consultas_status`
    FOREIGN KEY (`id_status`)
    REFERENCES `mydb`.`status` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`dia_da_semana`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`dia_da_semana` (
  `codigo` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(45) NULL,
  PRIMARY KEY (`codigo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`horarios_funcionarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`horarios_funcionarios` (
  `id_funcionarios` INT NOT NULL,
  `id_horarios` INT NOT NULL,
  `id_dia_da_semana` INT NOT NULL,
  PRIMARY KEY (`id_funcionarios`, `id_horarios`),
  INDEX `fk_horarios_has_funcionarios_funcionarios1_idx` (`id_funcionarios` ASC) VISIBLE,
  INDEX `fk_horarios_has_funcionarios_horarios1_idx` (`id_horarios` ASC) VISIBLE,
  INDEX `fk_dia_da_semana_idx` (`id_dia_da_semana` ASC) VISIBLE,
  CONSTRAINT `fk_horarios_has_funcionarios_horarios1`
    FOREIGN KEY (`id_horarios`)
    REFERENCES `mydb`.`horarios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_horarios_has_funcionarios_funcionarios1`
    FOREIGN KEY (`id_funcionarios`)
    REFERENCES `mydb`.`funcionarios` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_dia_da_semana`
    FOREIGN KEY (`id_dia_da_semana`)
    REFERENCES `mydb`.`dia_da_semana` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
