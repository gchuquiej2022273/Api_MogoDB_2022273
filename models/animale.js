const { Schema, model } = require('mongoose');

const animalSchema = Schema({
    
    nameAnimal: {
        type: String,
        default: null
    },

    typeAnimal: {
        type: String,
        require: [true, 'The animal type is mandatory']
    },

    AnimalMeal: {
        type: String,
        required: [true, 'The type of meal is mandatory']
    },

    numCasiller: {
        type: String,
        required: [true, 'The locker number is mandatory']
    },

    AdoptionStatus: {
        type: Boolean,
        default: true
    },
});

module.exports = model('Animale', animalSchema)