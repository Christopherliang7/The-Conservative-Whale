CREATE DATABASE IF NOT EXISTS Whales;

USE Whales;

CREATE TABLE IF NOT EXISTS SightingsPost (
  sighting_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR (50) NOT NULL,
  description VARCHAR (1500) NOT NULL
);

CREATE TABLE IF NOT EXISTS Photos (
  sighting_id INT NOT NULL,
  photo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  photo_url VARCHAR(100) NOT NULL
);

-- CREATE INDEX sighting_id_index ON Sightings (sighting_id);
-- CREATE INDEX sighting_id_index ON Photos (sighting_id);
