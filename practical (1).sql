-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jul 04, 2020 at 06:24 PM
-- Server version: 5.7.26-0ubuntu0.16.04.1
-- PHP Version: 7.2.19-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `practical`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `qtyPerUnit` int(11) NOT NULL,
  `unitPrice` decimal(10,2) NOT NULL,
  `unitInStock` enum('0','1') NOT NULL DEFAULT '1',
  `date` date NOT NULL,
  `status` enum('0','1') NOT NULL DEFAULT '1',
  `isDelete` enum('0','1') NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `ProductName`, `description`, `qtyPerUnit`, `unitPrice`, `unitInStock`, `date`, `status`, `isDelete`) VALUES
(1, 'Product One', 'Product One Description', 10, '501.11', '1', '2020-07-01', '1', '0'),
(2, 'Product Two', 'Product Two Description', 10, '20.22', '1', '2020-07-01', '1', '0'),
(3, 'Product Three', 'Product Three Description', 20, '4055.54', '1', '2020-07-01', '1', '0'),
(4, 'Product Four', 'Product Four Description', 500, '589.00', '0', '2020-07-01', '1', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
