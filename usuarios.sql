-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2022 at 07:33 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usuarios`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `folio` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `calle` varchar(255) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `colonia` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `codigo_postal` int(11) DEFAULT NULL,
  `fecha_de_registro` date NOT NULL DEFAULT current_timestamp(),
  `telefono1` varchar(20) DEFAULT NULL,
  `telefono2` varchar(20) DEFAULT NULL,
  `telefono3` varchar(20) DEFAULT NULL,
  `telefono4` varchar(20) DEFAULT NULL,
  `telefono5` varchar(20) DEFAULT NULL,
  `eliminado` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`folio`, `nombre`, `apellido`, `fecha_de_nacimiento`, `telefono`, `email`, `calle`, `numero`, `colonia`, `ciudad`, `codigo_postal`, `fecha_de_registro`, `telefono1`, `telefono2`, `telefono3`, `telefono4`, `telefono5`, `eliminado`) VALUES
(1, 'miguel', '', '1999-05-16', NULL, 'miguel', NULL, NULL, NULL, NULL, NULL, '2022-04-20', NULL, NULL, NULL, NULL, NULL, 0),
(2, 'Juanito', 'detal', '1992-04-01', NULL, 'juanito@test.com', NULL, NULL, NULL, NULL, NULL, '2022-04-20', NULL, NULL, NULL, NULL, NULL, 0),
(3, 'Mike', 'John', '1985-01-08', '6145234863', 'test@test.com', 'mora', 1346, 'colnia arbusto', 'Chihuahua', 12349, '2022-04-21', NULL, NULL, NULL, NULL, NULL, 1),
(4, 'Franciso', 'Guitierrez', '2022-04-14', '6741230461', 'test', '', 95413, 'a', '', 0, '2022-04-21', NULL, NULL, NULL, NULL, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`folio`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `folio` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
