CREATE DATABASE IF NOT EXISTS Whales;

USE Whales;

CREATE TABLE IF NOT EXISTS Sightings (
  sighting_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  species VARCHAR(25) NOT NULL,
  location VARCHAR(50) NOT NULL,
  sighting_time VARCHAR(50) NOT NULL,
  description VARCHAR (150) NOT NULL,
  latitude INT FLOAT NOT NULL,
  longitude INT FLOAT NOT NULL,
);

CREATE TABLE IF NOT EXISTS Photos (
  sighting_id INT NOT NULL,
  photo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  photo_url VARCHAR(100) NOT NULL,
);

CREATE INDEX sighting_id_index ON Sightings (sighting_id);
CREATE INDEX sighting_id_index ON Photos (sighting_id);
