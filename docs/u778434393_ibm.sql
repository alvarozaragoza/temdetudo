-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 20-Ago-2020 às 01:07
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u778434393_ibm`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `telefone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id`, `nome`, `endereco`, `telefone`) VALUES
(1, 'Marcela', 'R. Cônego Eugênio Leite, 972-1246 - Pinheiros', '(11)123456'),
(2, 'Antonio', 'R. Fidalga, 209-1 - Pinheiros', '(11)23456789'),
(3, 'Cláudia', 'R. Dr. Virgílio de Carvalho Pinto, 443-227 - Pinheiros', '(11)345678');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
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
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `marca`, `fornecedor`, `classificacao`, `preco_custo`, `preco_venda`, `qtde_estoque`, `qtde_loja`, `ativo`) VALUES
(1, 'Caderno', 'Caderno 10 matérias com capa dura.', 'Cadernos 10', 'Papelaria sr josé', 'Papelaria', '12.50', '15.00', 4, 1, 'S'),
(2, 'Vaso de flores', 'Vaso amarelo com flores artificias vermelhas.', 'Janaina Flores', 'Floricultura da Janaina', 'Decoração', '25.00', '33.90', 1, 2, 'S'),
(3, 'Conjunto para pintura', 'Kit com tintas e pincéis para pintura.', 'Cores Vivas', 'Papelaria sr josé', 'Papelaria', '19.90', '25.00', 5, 5, 'S'),
(11, 'Adesivos Verão (5 cartelas)', 'Cada cartela possui 12 adesivos no tema verão.', 'PaperJoy', 'PaperJoy', 'Papelaria', '4.50', '8.00', 25, 12, 'S'),
(12, 'Tintas Guache (12 cores)', 'Tinta guache lavável, com 15 ml cada. \n', 'Acrilex', 'Acrilex', 'Artes', '5.00', '9.50', 40, 27, 'S'),
(13, 'Kit marca texto - cores pastéis', '5 marca-textos de cores pastéis.', 'Faber Castell', 'Kalunga', 'Papelaria', '14.00', '27.00', 23, 11, 'S'),
(14, 'Agenda 2021', 'Agenda diária com feriados.', 'Tilibra', 'Tilibra', 'Papelaria ', '12.00', '18.00', 38, 23, 'S'),
(15, 'Papel sulfite A4 (500 fl)', 'Pacote com 500 folhas de papel sulfite A4; 75 g.', 'Chamex', 'Chamex', 'Papelaria', '14.90', '22.50', 15, 7, 'S'),
(16, 'Kit canetas esferográficas', 'Conjunto com três canetas esferográficas (azul, preta e vermelha).', 'Bic', 'Kalunga', 'Papelaria', '2.50', '6.00', 34, 12, 'S'),
(17, 'Caderneta Princesas', 'Caderneta para anotações; 9x15 cm; com pauta; 80 folhas.', 'Foroni', 'Foroni', 'Papelaria', '11.50', '16.00', 22, 8, 'S'),
(18, 'Cavalete para pintura', 'Cavalete para pintura com pernas dobráveis e ajuste de altura.', 'Moon Art', 'Kalunga', 'Artes', '66.00', '80.00', 13, 4, 'S'),
(19, 'Bloco adesivo - Post-it', 'Bloco adesivo com 100 folhas.', 'Post-it', 'Kalunga', 'Papelaria', '3.75', '6.50', 25, 12, 'S'),
(20, 'Globo decorativo', 'Globo decorativo com 25 cm de diâmetro.', 'De Coração', 'Home Style', 'Decoração', '35.00', '47.00', 9, 3, 'S'),
(21, 'Porta retrato - prata', 'Porta retrato 10x15 cm.', 'Moon Art', 'Kalunga', 'Decoração', '25.00', '37.00', 14, 9, 'S'),
(22, 'Cachepot de cerâmica', 'Cachepot de cerâmica decorativo para plantas', 'Plant&Deco', 'Plant&Deco', 'Decoração', '22.00', '30.00', 13, 7, 'S'),
(23, '*del* aa', 'aa', 'aa', 'aa', 'aa', '1.00', '2.00', 1, 2, 'N');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `email`, `nome`, `password`, `token`) VALUES
(1, 'dev@ibm.com', 'Alvaro Zaragoza', '123456', 'ubnababsdfkasjncjnwbccnjnwnin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas`
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
-- Extraindo dados da tabela `vendas`
--

INSERT INTO `vendas` (`id`, `data`, `id_cliente`, `id_vendedor`, `entregue`, `pago`, `opc_entrega`, `opc_pagamento`) VALUES
(1, '2020-02-07', 1, 1, 'N', 'N', '', ''),
(2, '2020-03-07', 2, 2, 'N', 'N', '', ''),
(3, '2020-04-07', 2, 2, 'N', 'N', '', ''),
(4, '2020-07-22', 1, 2, 'N', 'N', '', ''),
(5, '2020-10-10', 2, 2, 'N', 'N', NULL, NULL),
(36, '2020-08-20', 1, 1, 'N', 'N', NULL, NULL),
(39, '2020-08-20', 1, 1, 'N', 'N', NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_itens`
--

CREATE TABLE `vendas_itens` (
  `id` int(11) NOT NULL,
  `id_venda` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `preco_venda` decimal(10,2) NOT NULL,
  `qtde` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `vendas_itens`
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
(17, 5, 2, '33.90', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendedores`
--

CREATE TABLE `vendedores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `vendedores`
--

INSERT INTO `vendedores` (`id`, `nome`) VALUES
(1, 'Celeste'),
(2, 'Leila');

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_analise_vendas_itens`
-- (Veja abaixo para a view atual)
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
-- Estrutura stand-in para vista `vw_custos_vendas`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `vw_custos_vendas` (
`id_venda` int(11)
,`total_custo` decimal(42,2)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_produtos`
-- (Veja abaixo para a view atual)
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
-- Estrutura stand-in para vista `vw_totais_vendas`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `vw_totais_vendas` (
`id_venda` int(11)
,`total_vendido` decimal(42,2)
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `vw_vendas`
-- (Veja abaixo para a view atual)
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
-- Estrutura stand-in para vista `vw_vendas_itens`
-- (Veja abaixo para a view atual)
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
-- Estrutura para vista `vw_analise_vendas_itens`
--
DROP TABLE IF EXISTS `vw_analise_vendas_itens`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u778434393_ibm`@`127.0.0.1` SQL SECURITY DEFINER VIEW `vw_analise_vendas_itens`  AS  select `vi`.`id` AS `id`,`vi`.`id_venda` AS `id_venda`,`vi`.`id_produto` AS `id_produto`,`vi`.`preco_venda` AS `preco_venda`,`vi`.`qtde` AS `qtde`,`pr`.`preco_custo` AS `preco_custo`,`v`.`id_cliente` AS `id_cliente`,`v`.`id_vendedor` AS `id_vendedor` from ((`vendas_itens` `vi` left join `produtos` `pr` on(`pr`.`id` = `vi`.`id_produto`)) left join `vendas` `v` on(`v`.`id` = `vi`.`id_venda`)) ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_custos_vendas`
--
DROP TABLE IF EXISTS `vw_custos_vendas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u778434393_ibm`@`127.0.0.1` SQL SECURITY DEFINER VIEW `vw_custos_vendas`  AS  select `vw_analise_vendas_itens`.`id_venda` AS `id_venda`,sum(`vw_analise_vendas_itens`.`preco_custo` * `vw_analise_vendas_itens`.`qtde`) AS `total_custo` from `vw_analise_vendas_itens` group by `vw_analise_vendas_itens`.`id_venda` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_produtos`
--
DROP TABLE IF EXISTS `vw_produtos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u778434393_ibm`@`127.0.0.1` SQL SECURITY DEFINER VIEW `vw_produtos`  AS  select `produtos`.`id` AS `id`,`produtos`.`nome` AS `nome`,`produtos`.`descricao` AS `descricao`,`produtos`.`classificacao` AS `classificacao`,`produtos`.`preco_venda` AS `preco_venda`,`produtos`.`qtde_estoque` + `produtos`.`qtde_loja` AS `qtde` from `produtos` where `produtos`.`ativo` = 'S' ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_totais_vendas`
--
DROP TABLE IF EXISTS `vw_totais_vendas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u778434393_ibm`@`127.0.0.1` SQL SECURITY DEFINER VIEW `vw_totais_vendas`  AS  select `vendas_itens`.`id_venda` AS `id_venda`,sum(`vendas_itens`.`preco_venda` * `vendas_itens`.`qtde`) AS `total_vendido` from `vendas_itens` group by `vendas_itens`.`id_venda` ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_vendas`
--
DROP TABLE IF EXISTS `vw_vendas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u778434393_ibm`@`127.0.0.1` SQL SECURITY DEFINER VIEW `vw_vendas`  AS  select `vendas`.`id` AS `id`,`vendas`.`data` AS `data`,`vendas`.`id_cliente` AS `id_cliente`,`clientes`.`nome` AS `nome_cliente`,`clientes`.`endereco` AS `endereco`,`clientes`.`telefone` AS `telefone`,`vendas`.`id_vendedor` AS `id_vendedor`,`vendedores`.`nome` AS `nome_vendedor`,`vw_totais_vendas`.`total_vendido` AS `total_vendido`,`vw_custos_vendas`.`total_custo` AS `total_custo` from ((((`vendas` left join `clientes` on(`vendas`.`id_cliente` = `clientes`.`id`)) left join `vendedores` on(`vendas`.`id_vendedor` = `vendedores`.`id`)) left join `vw_totais_vendas` on(`vendas`.`id` = `vw_totais_vendas`.`id_venda`)) left join `vw_custos_vendas` on(`vendas`.`id` = `vw_custos_vendas`.`id_venda`)) ;

-- --------------------------------------------------------

--
-- Estrutura para vista `vw_vendas_itens`
--
DROP TABLE IF EXISTS `vw_vendas_itens`;

CREATE ALGORITHM=UNDEFINED DEFINER=`u778434393_ibm`@`127.0.0.1` SQL SECURITY DEFINER VIEW `vw_vendas_itens`  AS  select `vendas_itens`.`id` AS `id`,`vendas_itens`.`id_venda` AS `id_venda`,`vendas_itens`.`id_produto` AS `id_produto`,`produtos`.`nome` AS `nome_produto`,`vendas_itens`.`preco_venda` AS `preco_venda`,`vendas_itens`.`qtde` AS `qtde` from (`vendas_itens` left join `produtos` on(`vendas_itens`.`id_produto` = `produtos`.`id`)) ;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `vendas_itens`
--
ALTER TABLE `vendas_itens`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `vendedores`
--
ALTER TABLE `vendedores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `vendas`
--
ALTER TABLE `vendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `vendas_itens`
--
ALTER TABLE `vendas_itens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de tabela `vendedores`
--
ALTER TABLE `vendedores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
