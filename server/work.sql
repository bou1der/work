-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 26 2024 г., 13:47
-- Версия сервера: 8.0.30
-- Версия PHP: 8.0.22

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
-- Структура таблицы `chats`
--

CREATE TABLE `chats` (
  `id` int NOT NULL,
  `name` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `chats`
--

INSERT INTO `chats` (`id`, `name`) VALUES
(1, 'NEW.name'),
(2, '######');

--
-- Триггеры `chats`
--
DELIMITER $$
CREATE TRIGGER `LINK_CHAT_ID` AFTER INSERT ON `chats` FOR EACH ROW UPDATE `portfolio` SET `chat_id` = 'NEW.id' WHERE portfolio.name = NEW.name
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Структура таблицы `contacts`
--

CREATE TABLE `contacts` (
  `id` int NOT NULL,
  `image_dir` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `contact_text` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `connect_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `updatedAt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `contacts`
--

INSERT INTO `contacts` (`id`, `image_dir`, `contact_text`, `connect_link`, `createdAt`, `updatedAt`) VALUES
(1, './src/temp/contacts/whatsapp.svg', '+79775934510', '#', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int NOT NULL,
  `name` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `github_link` varchar(80) COLLATE utf8mb4_general_ci NOT NULL,
  `figma_link` varchar(80) COLLATE utf8mb4_general_ci NOT NULL,
  `image_dir` varchar(80) COLLATE utf8mb4_general_ci NOT NULL,
  `chat_id` int DEFAULT NULL,
  `createdAt` text COLLATE utf8mb4_general_ci NOT NULL,
  `updatedAt` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `portfolio`
--

INSERT INTO `portfolio` (`id`, `name`, `github_link`, `figma_link`, `image_dir`, `chat_id`, `createdAt`, `updatedAt`) VALUES
(1, '######', '12', '12', '12', NULL, '12', '12'),
(3, '######', '123', '1241', '124123', NULL, '1234', '124');

--
-- Триггеры `portfolio`
--
DELIMITER $$
CREATE TRIGGER `create_chat_portfolio` AFTER INSERT ON `portfolio` FOR EACH ROW INSERT INTO chats (`name`)
VALUES (NEW.name)
$$
DELIMITER ;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
