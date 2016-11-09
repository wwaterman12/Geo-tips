const express = require('express');
const DAO = require('../db/DAO');

const router = express.router();

class NoteController {
  static create(req, res) {
    const noteData = {
      body: req.body,
    };
    DAO.create(noteData)
           .then((note) => res.status(200).json(note));
  }
  static delete(req, res) {
    DAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = NoteController;
