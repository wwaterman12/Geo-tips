DROP DATABASE IF EXISTS geo_notes;
CREATE DATABASE geo_notes;

\c geo_notes

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  author VARCHAR NOT NULL,
  note VARCHAR NOT NULL
);
