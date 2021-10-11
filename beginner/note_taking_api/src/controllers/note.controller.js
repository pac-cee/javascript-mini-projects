const Note = require('../models/note.model');
const { validationResult } = require('express-validator');

exports.createNote = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            ...req.body,
            owner: req.user._id
        });

        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
