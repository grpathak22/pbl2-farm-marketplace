-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation time: 21/04/2023 at 07:32
-- PHP version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



-- Database: `farm_marketplace`


-- --------------------------------------------------------


-- Structure for table `customer`


CREATE TABLE `customer` (
  `CustomerID` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(60) NOT NULL,
  `PhoneNumber` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------


-- Structure for table `farmer`


CREATE TABLE `farmer` (
  `FarmerID` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(60) NOT NULL,
  `PhoneNumber` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dumping data for table `farmer`


-- --------------------------------------------------------


-- Structure for table `orderItem`


CREATE TABLE `orderItem` (
  `OrderItemId` int(11) NOT NULL,
  `OrderId` int(11) NOT NULL,
  `ItemName` varchar(69) NOT NULL,
  `ItemQuantity` int(11) NOT NULL,
  `ItemPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------


-- Structure for table `orders`


CREATE TABLE `orders` (
  `OrderId` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `Tax` decimal(10,2) DEFAULT NULL,
  `SubTotal` decimal(10,2) DEFAULT NULL,
  `TotalPrice` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------


-- Structure for table `products`


CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `FarmerID` int(11) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `ProductDescription` varchar(255) NOT NULL,
  `ProductPrice` decimal(10,2) DEFAULT NULL,
  `ProductQuantity` int(100) NOT NULL,
  `ProductImageURL` varchar(255) NOT NULL,
  `ProductCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;





-- Structure for table `users`


CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(60) NOT NULL,
  `LastName` varchar(60) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `TypeAccount` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Dumping data for table `users`


INSERT INTO `users` (`UserId`, `FirstName`, `LastName`, `Email`, `Password`, `TypeAccount`) VALUES
(12, 'Admin', 'Admin', 'admin@email.com', '123', 'Farmer');


-- Indexes for dumped tables



-- Indexes for table `customer`

ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`),
  ADD KEY `UserId` (`UserId`);

-- Indexes for table `farmer`

ALTER TABLE `farmer`
  ADD PRIMARY KEY (`FarmerID`),
  ADD KEY `UserId` (`UserId`);


-- Indexes for table `orderItem`

ALTER TABLE `orderItem`
  ADD PRIMARY KEY (`OrderItemId`),
  ADD KEY `FK_OrderItem_Orders` (`OrderId`);


-- Indexes for table `orders`

ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderId`),
  ADD KEY `UserId` (`UserId`);


-- Indexes for table `products`

ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `FarmerID` (`FarmerID`);


-- Indexes for table `users`

ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `UNIQUE_EMAIL` (`Email`);


-- AUTO_INCREMENT for dumped tables



-- AUTO_INCREMENT for table `customer`

ALTER TABLE `customer`
  MODIFY `CustomerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;


-- AUTO_INCREMENT for table `farmer`

ALTER TABLE `farmer`
  MODIFY `FarmerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;


-- AUTO_INCREMENT for table `orderItem`

ALTER TABLE `orderItem`
  MODIFY `OrderItemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;


-- AUTO_INCREMENT for table `orders`

ALTER TABLE `orders`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;


-- AUTO_INCREMENT for table `products`

ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;


-- AUTO_INCREMENT for table `users`

ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;


-- Constraints for dumped tables



-- Constraints for table `customer`

ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);


-- Constraints for table `farmer`

ALTER TABLE `farmer`
  ADD CONSTRAINT `farmer_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);


-- Constraints for table `orderItem`

ALTER TABLE `orderItem`
  ADD CONSTRAINT `FK_OrderItem_Orders` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`OrderId`);


-- Constraints for table `orders`

ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);


-- Constraints for table `products`

ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`FarmerID`) REFERENCES `farmer` (`FarmerID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


