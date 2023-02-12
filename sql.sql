-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Fev-2023 às 03:29
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `camaras`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `camaras`
--

CREATE TABLE `camaras` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `presidente` varchar(100) NOT NULL,
  `técnico` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `endereço` varchar(100) NOT NULL,
  `cnpj` varchar(100) NOT NULL,
  `logo` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `camaras`
--

INSERT INTO `camaras` (`id`, `nome`, `presidente`, `técnico`, `telefone`, `email`, `endereço`, `cnpj`, `logo`) VALUES
(1, 'A', '[value-3]', '[value-4]', '[value-5]', '[value-6]', '[value-7]', '[value-8]', '[value-9]'),
(5, '[value-2]', '[value-3]', '[value-4]', '1', '[value-6]1', '[value-7]', '[value-8]', '[value-9]'),
(6, 'william', 'william', 'william', 'william', 'william', 'william', 'william', 'william'),
(9, 'tesasdgsdagte', 'teste2', 'teste3', 'asdgds', 'asdgaasdggasdsdijg', 'asdaguasdg', 'sdgjisdgji', 'adsioggjiasdo'),
(23, 'tesasdsdsdfhgsdagte', 'tedfshghsdhfste2', 'testshsdfhdfhse3', 'ashshsdfsdfdgds', 'asdgaashsdfhsdfdfdggasdsdijg', 'hsdfhd', 'sdgjisdhfsdgji', 'adsiosdfhggjiasdo'),
(29, 'tesate', 'testesdgsadg', 'sadgijais0dogj29', 'asdg8asdg877/', '4sad/8/as7d48', 'sad4/8asd4', 'odsjiagfadjsg7', 'jadi90sgh444');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sessões`
--

CREATE TABLE `sessões` (
  `id` int(11) NOT NULL,
  `camara` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `pauta` varchar(100) NOT NULL,
  `dia` int(100) NOT NULL,
  `mes` int(100) NOT NULL,
  `hora` int(100) NOT NULL,
  `minuto` int(100) NOT NULL,
  `descrição` varchar(500) NOT NULL,
  `orador` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `sessões`
--

INSERT INTO `sessões` (`id`, `camara`, `tipo`, `pauta`, `dia`, `mes`, `hora`, `minuto`, `descrição`, `orador`) VALUES
(17, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(20, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(21, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(22, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(23, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(24, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(25, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(26, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(27, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(28, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(29, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(30, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(31, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(32, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(33, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(34, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(35, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(36, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(37, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(38, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(39, 'william', 'teste', 'coding', 10, 2, 10, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(40, 'william', 'teste', 'coding', 11, 2, 52, 0, 'Isso é uma sessão teste', 'William Pscheidt'),
(41, 'william', 'teste', 'coding', 11, 2, 22, 53, 'Isso é uma sessão teste', 'William Pscheidt'),
(42, 'william', 'teste', 'coding', 11, 2, 22, 53, 'Isso é uma sessão teste', 'William Pscheidt'),
(43, 'william', 'teste', 'coding', 11, 2, 22, 57, 'Isso é uma sessão teste', 'William Pscheidt'),
(44, 'william', 'teste', 'coding', 11, 2, 22, 57, 'Isso é uma sessão teste', 'William Pscheidt'),
(45, 'william', 'teste', 'coding', 11, 2, 22, 57, 'Isso é uma sessão teste', 'William Pscheidt'),
(46, 'william', 'teste', 'coding', 11, 2, 22, 57, 'Isso é uma sessão teste', 'William Pscheidt');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuários`
--

CREATE TABLE `usuários` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `função` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `camara` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vereadores`
--

CREATE TABLE `vereadores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `partido` varchar(100) NOT NULL,
  `camara` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `vereadores`
--

INSERT INTO `vereadores` (`id`, `nome`, `partido`, `camara`) VALUES
(4, 'William JS', 'Coders', 'william'),
(15, 'William Pscheidt', 'Partido dos Programadores', 'william');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `camaras`
--
ALTER TABLE `camaras`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_camara` (`email`),
  ADD UNIQUE KEY `nome` (`nome`);

--
-- Índices para tabela `sessões`
--
ALTER TABLE `sessões`
  ADD KEY `camaraFK` (`id`) USING BTREE,
  ADD KEY `CAMARAFK_` (`camara`),
  ADD KEY `oradorFK` (`orador`) USING BTREE;

--
-- Índices para tabela `usuários`
--
ALTER TABLE `usuários`
  ADD PRIMARY KEY (`id`),
  ADD KEY `camarafk` (`camara`);

--
-- Índices para tabela `vereadores`
--
ALTER TABLE `vereadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nomeFK` (`nome`),
  ADD KEY `camarafk__` (`camara`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `camaras`
--
ALTER TABLE `camaras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `sessões`
--
ALTER TABLE `sessões`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de tabela `usuários`
--
ALTER TABLE `usuários`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `vereadores`
--
ALTER TABLE `vereadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `sessões`
--
ALTER TABLE `sessões`
  ADD CONSTRAINT `CAMARAFK_` FOREIGN KEY (`camara`) REFERENCES `camaras` (`nome`),
  ADD CONSTRAINT `oradorFK` FOREIGN KEY (`orador`) REFERENCES `vereadores` (`nome`);

--
-- Limitadores para a tabela `usuários`
--
ALTER TABLE `usuários`
  ADD CONSTRAINT `camarafk` FOREIGN KEY (`camara`) REFERENCES `camaras` (`nome`);

--
-- Limitadores para a tabela `vereadores`
--
ALTER TABLE `vereadores`
  ADD CONSTRAINT `camarafk__` FOREIGN KEY (`camara`) REFERENCES `camaras` (`nome`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
