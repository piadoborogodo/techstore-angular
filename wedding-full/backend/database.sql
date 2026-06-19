-- Execute este arquivo no seu MySQL para criar o banco e a tabela

CREATE DATABASE IF NOT EXISTS casamento
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE casamento;

CREATE TABLE IF NOT EXISTS reservations (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  gift_id     INT          NOT NULL UNIQUE,
  reserved_by VARCHAR(255) NOT NULL,
  created_at  DATETIME     DEFAULT CURRENT_TIMESTAMP
);
