/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 8.0.23 : Database - gobin
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`gobin` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `gobin`;

/*Table structure for table `carrito` */

DROP TABLE IF EXISTS `carrito`;

CREATE TABLE `carrito` (
  `id` int NOT NULL AUTO_INCREMENT,
  `precio` varchar(45) NOT NULL,
  `cantidad` int NOT NULL,
  `total` varchar(45) NOT NULL,
  `productos_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_carrito_productos1_idx` (`productos_id`),
  CONSTRAINT `fk_carrito_productos1` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `carrito` */

/*Table structure for table `categoria` */

DROP TABLE IF EXISTS `categoria`;

CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `categoria` */

insert  into `categoria`(`id`,`nombre`) values 
(1,'Frio'),
(2,'Caliente'),
(3,'Bebidas'),
(4,'Postres');

/*Table structure for table `comentario` */

DROP TABLE IF EXISTS `comentario`;

CREATE TABLE `comentario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comentario_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_comentario_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `comentario` */

/*Table structure for table `contactenos` */

DROP TABLE IF EXISTS `contactenos`;

CREATE TABLE `contactenos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `correo_emi` varchar(70) NOT NULL,
  `correo_recep` varchar(70) DEFAULT 'servicio_cliente@sisu.com',
  `asunto` varchar(45) DEFAULT NULL,
  `contactenoscol` varchar(45) NOT NULL,
  `mensaje` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `contactenos` */

/*Table structure for table `opiniones` */

DROP TABLE IF EXISTS `opiniones`;

CREATE TABLE `opiniones` (
  `publicacion_id` int NOT NULL,
  `comentario_id` int NOT NULL,
  PRIMARY KEY (`publicacion_id`,`comentario_id`),
  KEY `fk_tweet_has_comentario_comentario1_idx` (`comentario_id`),
  KEY `fk_tweet_has_comentario_tweet1_idx` (`publicacion_id`),
  CONSTRAINT `fk_tweet_has_comentario_comentario1` FOREIGN KEY (`comentario_id`) REFERENCES `comentario` (`id`),
  CONSTRAINT `fk_tweet_has_comentario_tweet1` FOREIGN KEY (`publicacion_id`) REFERENCES `publicacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `opiniones` */

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(70) NOT NULL,
  `precio` varchar(45) NOT NULL,
  `imagen` varchar(70) NOT NULL,
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_productos_categoria1_idx` (`categoria_id`),
  CONSTRAINT `fk_productos_categoria1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `productos` */

insert  into `productos`(`id`,`nombre`,`descripcion`,`precio`,`imagen`,`categoria_id`) values 
(1,'Hola','Esto es una simulacion','5000','assets/images/prueba.jpg',1),
(2,'otra','prueba de todo','6000','nosemas',3);

/*Table structure for table `publicacion` */

DROP TABLE IF EXISTS `publicacion`;

CREATE TABLE `publicacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(60) DEFAULT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_publicacion_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_publicacion_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `publicacion` */

/*Table structure for table `reserva` */

DROP TABLE IF EXISTS `reserva`;

CREATE TABLE `reserva` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` varchar(45) NOT NULL,
  `n_puesto` int NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_reserva_usuario1_idx` (`usuario_id`),
  CONSTRAINT `fk_reserva_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `reserva` */

/*Table structure for table `rol` */

DROP TABLE IF EXISTS `rol`;

CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `rol` */

insert  into `rol`(`id`,`nombre`) values 
(1,'admin'),
(2,'cliente'),
(3,'trabajador');

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'En este campo se va a almacenar el nickname del usuario.',
  `nombres` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `img_perfil` varchar(60) DEFAULT NULL COMMENT 'Se almacena la url de la imagen de perfil del usuario.',
  `rol_id` int NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_usuario_rol1_idx` (`rol_id`),
  CONSTRAINT `fk_usuario_rol1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `usuario` */

insert  into `usuario`(`id`,`nombres`,`email`,`contrasenia`,`fecha_nacimiento`,`img_perfil`,`rol_id`) values 
(1,'robin','robin@robin.com','1234','1999-01-27',NULL,1),
(2,'daniel','dani@robin.com','1234','2000-02-25',NULL,2),
(3,'cristian','cristian@robin.com','123456','2001-02-25',NULL,2),
(5,'prueba','prueba@robin.com','1234','2000-04-21',NULL,2);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
