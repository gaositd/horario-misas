CREATE DATABASE IF NOT EXISTS horariosMisas;

USE horariosMisas;

CREATE TABLE IF NOT EXISTS estado(
	id VARCHAR(16) NOT NULL PRIMARY KEY,
  nombreLargo VARCHAR(100),
  nombreCorto VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS municipio(
	id VARCHAR(16) NOT NULL PRIMARY KEY,
  nombreLargo VARCHAR(16),
  nombreCorto VARCHAR(16)
);

CREATE TABLE IF NOT EXISTS sacerdote(
	id VARCHAR(16) PRIMARY KEY NOT NULL,
  id_trabajoSacerdote VARCHAR(16) NOT NULL,
  id_vehiculo VARCHAR(16) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  direccion VARCHAR (200)
);

CREATE TABLE IF NOT EXISTS vehiculo(
	id VARCHAR(16) PRIMARY KEY NOT NULL,
  tipo VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS trabajoSacerdote(
	id VARCHAR(16) NOT NULL PRIMARY KEY,
  nombrePuesto VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS decanatoCab(
	id VARCHAR(16) NOT NULL PRIMARY KEY,
  id_estado VARCHAR(16) NOT NULL,
  id_municipio VARCHAR(16) NOT NULL,
  direccion VARCHAR(200) NOT NULL,
  nombre VARCHAR(100) NOT null
);

CREATE TABLE IF NOT EXISTS decanatoPos(
	id_decanato VARCHAR(16) NOT NULL,
  id_iglesia VARCHAR(16),
  PRIMARY KEY (id_decanato, id_iglesia)
);

CREATE TABLE IF NOT EXISTS iglesiaCab(
	id VARCHAR(16) NOT NULL PRIMARY KEY,
  id_estado VARCHAR(16) NOT NULL,
  id_municipio VARCHAR(16) NOT NULL,
  nombre VARCHAR(100)not NULL,
  direccion VARCHAR(200) NOT NULL
);

CREATE table IF NOT EXISTS iglesiaPos(
  id_iglesia VARCHAR(16) NOT NULL,
  id_sacerdote VARCHAR(16) NOT NULL,
  id_trabajoSacerdote VARCHAR(16) NOT NULL,
  PRIMARY KEY(id_iglesia, id_sacerdote)
);