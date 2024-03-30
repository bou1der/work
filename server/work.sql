-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 30 2024 г., 17:54
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `work`
--

-- --------------------------------------------------------

--
-- Структура таблицы `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `image_dir` varchar(50) NOT NULL,
  `contact_text` varchar(25) NOT NULL,
  `connect_link` text NOT NULL,
  `createdAt` text NOT NULL,
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `contacts`
--

INSERT INTO `contacts` (`id`, `image_dir`, `contact_text`, `connect_link`, `createdAt`, `updatedAt`) VALUES
(1, './src/temp/contacts/whatsapp.svg', '+79775934510', '#', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `toChat` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `date_stamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` text NOT NULL,
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `portfolios`
--

CREATE TABLE `portfolios` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `github_link` varchar(80) NOT NULL,
  `figma_link` varchar(80) NOT NULL,
  `image_dir` varchar(80) NOT NULL,
  `createdAt` text NOT NULL,
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `portfolios`
--

INSERT INTO `portfolios` (`id`, `name`, `github_link`, `figma_link`, `image_dir`, `createdAt`, `updatedAt`) VALUES
(3, 'resume', 'github.com', 'figma.com', './src/temp/portfolio/resume.png', '1234', '124');

-- --------------------------------------------------------

--
-- Структура таблицы `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `image_dir` varchar(255) NOT NULL,
  `text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`text`)),
  `percent` int(11) NOT NULL,
  `rgb` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `createdAt` text NOT NULL,
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `skills`
--

INSERT INTO `skills` (`id`, `name`, `image_dir`, `text`, `percent`, `rgb`, `createdAt`, `updatedAt`) VALUES
(1, 'ReactJS', './src/temp/skills/reactlogo.png', '[\"Опыт работы с хуками (useEffect,useMemo, useState,useCallback)\",\"Работа с роутером, props, компонентами,условным рендером\",\"Понимание VirtualDOM/DOM дерева, реактивности\",\"Запросы с клиента на backend, библиотека Axios, интерцепторы\",\"Работа с Веб сокетами, socket.io, socket.io-client, а так же с состояниями mobX и мутацией компонентов в нем\"]', 70, '[97,218,251]', '', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
