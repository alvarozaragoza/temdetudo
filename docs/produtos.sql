-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 14, 2020 at 11:45 AM
-- Server version: 5.7.25
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `temdetudo`
--

-- --------------------------------------------------------

--
-- Table structure for table `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `descricao` varchar(250) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `fornecedor` varchar(50) DEFAULT NULL,
  `classificacao` varchar(50) DEFAULT NULL,
  `preco_custo` decimal(10,2) DEFAULT NULL,
  `preco_venda` decimal(10,2) DEFAULT NULL,
  `qtde_estoque` int(1) DEFAULT NULL,
  `qtde_loja` int(1) DEFAULT NULL,
  `ativo` varchar(1) NOT NULL DEFAULT 'S'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `marca`, `fornecedor`, `classificacao`, `preco_custo`, `preco_venda`, `qtde_estoque`, `qtde_loja`, `ativo`) VALUES
(1, 'Caderno', 'Caderno 10 matérias com capa dura', 'Cadernos 10', 'papelaria sr josé', 'Papelaria', '12.50', '15.00', 4, 1, 'S'),
(2, 'Vaso de flores', 'Vaso amarelo com flores artificias vermelhas', 'Janaina Flores', 'floricultura da Janaina', 'Decoração', '25.00', '33.90', 1, 2, 'S'),
(3, 'Conjunto para pintura', 'Kit com tintas e pincéis para pintura', 'Cores Vivas', 'papelaria sr josé', 'Papelaria', '19.90', '25.00', 5, 5, 'S'),
(4, 'TESTE', 'TESTE TESTE', 'TESTE', 'TESTE', 'TESTE', '10.00', '20.00', 10, 20, 'S');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
