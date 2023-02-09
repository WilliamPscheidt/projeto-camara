
-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 09-Fev-2023 às 02:38
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
-- Banco de dados: `teste`
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

-- --------------------------------------------------------

--
-- Estrutura da tabela `sessões`
--

CREATE TABLE `sessões` (
  `id` int(11) NOT NULL,
  `camara` varchar(100) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `pauta` varchar(100) NOT NULL,
  `data` date NOT NULL,
  `hora` datetime(6) NOT NULL,
  `descrição` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuários`
--

CREATE TABLE `usuários` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `função` varchar(100) NOT NULL,
  `e-mail` varchar(100) NOT NULL,
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
  ADD KEY `CAMARAFK_` (`camara`);

--
-- Índices para tabela `usuários`
--
ALTER TABLE `usuários`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`,`e-mail`),
  ADD KEY `camarafk` (`camara`);

--
-- Índices para tabela `vereadores`
--
ALTER TABLE `vereadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `camarafk__` (`camara`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `camaras`
--
ALTER TABLE `camaras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `sessões`
--
ALTER TABLE `sessões`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuários`
--
ALTER TABLE `usuários`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `vereadores`
--
ALTER TABLE `vereadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `sessões`
--
ALTER TABLE `sessões`
  ADD CONSTRAINT `CAMARAFK_` FOREIGN KEY (`camara`) REFERENCES `camaras` (`nome`);

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
