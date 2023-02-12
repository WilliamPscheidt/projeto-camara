-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Fev-2023 às 03:56
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
-- Estrutura da tabela `vereadores`
--

CREATE TABLE `vereadores` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `partido` varchar(100) NOT NULL,
  `camara` varchar(100) NOT NULL,
  `link_avatar` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `vereadores`
--

INSERT INTO `vereadores` (`id`, `nome`, `partido`, `camara`, `link_avatar`) VALUES
(4, 'William JS', 'Coders', 'william', ''),
(15, 'William Pscheidt', 'Partido dos Programadores', 'william', ''),
(17, 'William Teste', 'Partido dos Vagabundos', 'william', 'avatar-1676170410804.jpg'),
(19, 'William Testesd', 'Partido dos Vagabundoss', 'william', 'avatar-1676170431645.jpg');

--
-- Índices para tabelas despejadas
--

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
-- AUTO_INCREMENT de tabela `vereadores`
--
ALTER TABLE `vereadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `vereadores`
--
ALTER TABLE `vereadores`
  ADD CONSTRAINT `camarafk__` FOREIGN KEY (`camara`) REFERENCES `camaras` (`nome`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
