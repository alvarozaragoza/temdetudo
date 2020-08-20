-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 18, 2020 at 12:56 AM
-- Server version: 5.7.25
-- PHP Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `temdetudo`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `endereco`, `telefone`) VALUES
(1, 'Marcela', 'R. Cônego Eugênio Leite, 972-1246 - Pinheiros', '(11)123456'),
(2, 'Antonio', 'R. Fidalga, 209-1 - Pinheiros', '(11)23456789'),
(3, 'Cláudia', 'R. Dr. Virgílio de Carvalho Pinto, 443-227 - Pinheiros', '(11)345678'),
(8, 'Alvaro Zaragoza', 'Av. Reynaldo de Porcari, 1731, V17 C02', '11973708569'),
(9, 'Alvaro R Z Douglas', 'Av. Reynaldo de Porcari, 1731, V17 C02', '11973708569'),
(10, 'CELESTINA VILLALBA', 'R CAMINHO DO PILAR', '11973708569'),
(11, 'Andres', 'lskjd h ad lskjf asdkjfn alsfdaksd', '109982312 ');

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
(1, 'Caderno', 'Caderno 10 matérias com capa dura', 'Cadernos 10', 'papelaria sr josé', '123', '12.50', '15.00', 4, 1, 'S'),
(2, 'Vaso de flores', 'Vaso amarelo com flores artificias vermelhas', 'Janaina Flores', 'floricultura da Janaina', 'Decoração', '25.00', '33.90', 1, 2, 'S'),
(3, 'Conjunto para pintura', 'Kit com tintas e pincéis para pintura', 'Cores Vivas', 'papelaria sr josé', 'Papelaria', '19.90', '25.00', 5, 5, 'S'),
(4, 'TESTE', 'TESTE TESTE', 'TESTE', 'TESTE', 'TESTE', '10.00', '20.00', 10, 20, 'S'),
(5, '*del* 112', '112 asdkc asljnc asic ajs cas ck2asnjc asc kljas casb ckcnja sdc asc asj dcas cnas dcb asc ascass', '112', '112', '112', '112.00', '112.00', 112, 112, 'N'),
(6, '*del* 111', '111', '111', '111', '111', '36.88', '0.00', 0, 0, 'N'),
(7, '444', '444', '444', '44', '444', '444.00', '444.00', 44, 44, 'S');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `nome`, `password`, `token`) VALUES
(1, 'dev@ibm.com', 'Alvaro Zaragoza', '123456', 'ubnababsdfkasjncjnwbccnjnwnin');

-- --------------------------------------------------------

--
-- Table structure for table `vendas`
--

CREATE TABLE `vendas` (
  `id` int(11) NOT NULL,
  `data` varchar(10) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `entregue` varchar(1) NOT NULL DEFAULT 'N',
  `pago` varchar(1) NOT NULL DEFAULT 'N',
  `opc_entrega` varchar(20) DEFAULT NULL,
  `opc_pagamento` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vendas`
--

INSERT INTO `vendas` (`id`, `data`, `id_cliente`, `id_vendedor`, `entregue`, `pago`, `opc_entrega`, `opc_pagamento`) VALUES
(1, '2020-02-07', 1, 1, 'N', 'N', '', ''),
(2, '2020-03-07', 2, 2, 'N', 'N', '', ''),
(3, '2020-04-07', 2, 2, 'N', 'N', '', ''),
(4, '2020-07-22', 1, 2, 'N', 'N', '', ''),
(5, '2020-10-10', 2, 2, 'N', 'N', NULL, NULL),
(15, '2020-08-08', 1, 1, 'N', 'N', NULL, NULL),
(16, '2020-09-09', 1, 1, 'N', 'N', NULL, NULL),
(17, '12231', 1, 1, 'N', 'N', NULL, NULL),
(19, '123124', 1, 7, 'N', 'N', NULL, NULL),
(20, '2020-08-17', 1, 1, 'N', 'N', NULL, NULL),
(21, '2020-08-08', 11, 5, 'N', 'N', NULL, NULL),
(22, '2020-08-17', 2, 5, 'N', 'N', NULL, NULL),
(23, '2020-08-17', 1, 1, 'N', 'N', NULL, NULL),
(24, '2020-08-17', 11, 7, 'N', 'N', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vendas_itens`
--

CREATE TABLE `vendas_itens` (
  `id` int(11) NOT NULL,
  `id_venda` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `preco_venda` decimal(10,2) NOT NULL,
  `qtde` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vendas_itens`
--

INSERT INTO `vendas_itens` (`id`, `id_venda`, `id_produto`, `preco_venda`, `qtde`) VALUES
(7, 1, 1, '15.00', 2),
(8, 2, 1, '15.00', 1),
(9, 2, 3, '25.00', 1),
(10, 3, 2, '33.90', 1),
(11, 4, 3, '25.00', 1),
(14, 5, 1, '15.00', 2),
(15, 5, 2, '33.86', 2),
(16, 5, 1, '15.00', 4),
(17, 5, 2, '33.90', 2),
(22, 16, 2, '33.90', 1),
(23, 16, 2, '33.90', 2),
(24, 17, 1, '15.00', 1),
(26, 20, 1, '15.00', 1),
(27, 24, 1, '15.00', 2),
(28, 24, 3, '25.00', 1),
(29, 22, 1, '20.00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `vendedores`
--

CREATE TABLE `vendedores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `vendedores`
--

INSERT INTO `vendedores` (`id`, `nome`) VALUES
(1, 'Celeste'),
(2, 'Leila'),
(3, 'Luiz Cláudio'),
(4, 'Maria do Carmo'),
(5, 'César'),
(6, 'Elaine'),
(7, 'José');

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_analise_vendas_itens`
-- (See below for the actual view)
--
CREATE TABLE `vw_analise_vendas_itens` (
`id` int(11)
,`id_venda` int(11)
,`id_produto` int(11)
,`preco_venda` decimal(10,2)
,`qtde` int(11)
,`preco_custo` decimal(10,2)
,`id_cliente` int(11)
,`id_vendedor` int(11)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_custos_vendas`
-- (See below for the actual view)
--
CREATE TABLE `vw_custos_vendas` (
`id_venda` int(11)
,`total_custo` decimal(42,2)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_produtos`
-- (See below for the actual view)
--
CREATE TABLE `vw_produtos` (
`id` int(11)
,`nome` varchar(100)
,`descricao` varchar(250)
,`classificacao` varchar(50)
,`preco_venda` decimal(10,2)
,`qtde` bigint(12)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_totais_vendas`
-- (See below for the actual view)
--
CREATE TABLE `vw_totais_vendas` (
`id_venda` int(11)
,`total_vendido` decimal(42,2)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_vendas`
-- (See below for the actual view)
--
CREATE TABLE `vw_vendas` (
`id` int(11)
,`data` varchar(10)
,`id_cliente` int(11)
,`nome_cliente` varchar(100)
,`endereco` varchar(100)
,`telefone` varchar(15)
,`id_vendedor` int(11)
,`nome_vendedor` varchar(100)
,`total_vendido` decimal(42,2)
,`total_custo` decimal(42,2)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vw_vendas_itens`
-- (See below for the actual view)
--
CREATE TABLE `vw_vendas_itens` (
`id` int(11)
,`id_venda` int(11)
,`id_produto` int(11)
,`nome_produto` varchar(100)
,`preco_venda` decimal(10,2)
,`qtde` int(11)
);

-- --------------------------------------------------------

--
-- Structure for view `vw_analise_vendas_itens`
--
DROP TABLE IF EXISTS `vw_analise_vendas_itens`;

CREATE VIEW `vw_analise_vendas_itens`  AS  select `vi`.`id` AS `id`,`vi`.`id_venda` AS `id_venda`,`vi`.`id_produto` AS `id_produto`,`vi`.`preco_venda` AS `preco_venda`,`vi`.`qtde` AS `qtde`,`pr`.`preco_custo` AS `preco_custo`,`v`.`id_cliente` AS `id_cliente`,`v`.`id_vendedor` AS `id_vendedor` from ((`vendas_itens` `vi` left join `produtos` `pr` on((`pr`.`id` = `vi`.`id_produto`))) left join `vendas` `v` on((`v`.`id` = `vi`.`id_venda`))) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_custos_vendas`
--
DROP TABLE IF EXISTS `vw_custos_vendas`;

CREATE  VIEW `vw_custos_vendas`  AS  select `vw_analise_vendas_itens`.`id_venda` AS `id_venda`,sum((`vw_analise_vendas_itens`.`preco_custo` * `vw_analise_vendas_itens`.`qtde`)) AS `total_custo` from `vw_analise_vendas_itens` group by `vw_analise_vendas_itens`.`id_venda` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_produtos`
--
DROP TABLE IF EXISTS `vw_produtos`;

CREATE  VIEW `vw_produtos`  AS  select `produtos`.`id` AS `id`,`produtos`.`nome` AS `nome`,`produtos`.`descricao` AS `descricao`,`produtos`.`classificacao` AS `classificacao`,`produtos`.`preco_venda` AS `preco_venda`,(`produtos`.`qtde_estoque` + `produtos`.`qtde_loja`) AS `qtde` from `produtos` where (`produtos`.`ativo` = 'S') ;

-- --------------------------------------------------------

--
-- Structure for view `vw_totais_vendas`
--
DROP TABLE IF EXISTS `vw_totais_vendas`;

CREATE VIEW `vw_totais_vendas`  AS  select `vendas_itens`.`id_venda` AS `id_venda`,sum((`vendas_itens`.`preco_venda` * `vendas_itens`.`qtde`)) AS `total_vendido` from `vendas_itens` group by `vendas_itens`.`id_venda` ;

-- --------------------------------------------------------

--
-- Structure for view `vw_vendas`
--
DROP TABLE IF EXISTS `vw_vendas`;

CREATE  VIEW `vw_vendas`  AS  select `vendas`.`id` AS `id`,`vendas`.`data` AS `data`,`vendas`.`id_cliente` AS `id_cliente`,`clientes`.`nome` AS `nome_cliente`,`clientes`.`endereco` AS `endereco`,`clientes`.`telefone` AS `telefone`,`vendas`.`id_vendedor` AS `id_vendedor`,`vendedores`.`nome` AS `nome_vendedor`,`vw_totais_vendas`.`total_vendido` AS `total_vendido`,`vw_custos_vendas`.`total_custo` AS `total_custo` from ((((`vendas` left join `clientes` on((`vendas`.`id_cliente` = `clientes`.`id`))) left join `vendedores` on((`vendas`.`id_vendedor` = `vendedores`.`id`))) left join `vw_totais_vendas` on((`vendas`.`id` = `vw_totais_vendas`.`id_venda`))) left join `vw_custos_vendas` on((`vendas`.`id` = `vw_custos_vendas`.`id_venda`))) ;

-- --------------------------------------------------------

--
-- Structure for view `vw_vendas_itens`
--
DROP TABLE IF EXISTS `vw_vendas_itens`;

CREATE VIEW `vw_vendas_itens`  AS  select `vendas_itens`.`id` AS `id`,`vendas_itens`.`id_venda` AS `id_venda`,`vendas_itens`.`id_produto` AS `id_produto`,`produtos`.`nome` AS `nome_produto`,`vendas_itens`.`preco_venda` AS `preco_venda`,`vendas_itens`.`qtde` AS `qtde` from (`vendas_itens` left join `produtos` on((`vendas_itens`.`id_produto` = `produtos`.`id`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendas_itens`
--
ALTER TABLE `vendas_itens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vendas`
--
ALTER TABLE `vendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `vendas_itens`
--
ALTER TABLE `vendas_itens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
