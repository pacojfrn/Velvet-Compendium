const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    St: { type: Number, required: true },
    Ma: { type: Number, required: true },
    En: { type: Number, required: true },
    Ag: { type: Number, required: true },
    Lu: { type: Number, required: true }
  });

const personaSchema = new mongoose.Schema({
    arcana:{
        type: String,
        required: true
    },
    weak:{
        type: [String],
        required: true
    },
    stats:[statsSchema],
    strength:{
        type: [String],
        required: true
    },
    level:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    }});

const persona = mongoose.model('Persona', personaSchema, 'Persona');

module.exports = persona;
