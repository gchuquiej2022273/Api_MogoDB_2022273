const bcryptjs = require('bcryptjs');
const Animale = require('../models/animale');
const { response } = require('express');


const animaleGet = async(req, res = response) => {
    const { limite,desde } = req.query;
    const query = { AdoptionStatus: true};

    const [total, animale] = await Promise.all([
        Animale.countDocuments(query),
        Animale.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        animale
    });
}

const getAnimalId = async(req, res) =>{
    const { id } = req.params;
    const animale = await Animale.findOne({_id: id});

    res.status(200).json({
        animale
    });
}

const animalePost = async(req, res) =>{
    const { typeAnimal, AnimalMeal, numCasiller, AdoptionStatus } = req.body;
    const animale = new Animale({ typeAnimal, AnimalMeal, numCasiller, AdoptionStatus });

    await animale.save();
    res.status(202).json({
        animale
    });
}

const putAnimal = async (req,res = response) =>{
    const { id } = req.params;
    const {_id,AdoptionStatus, ...resto} = req.body;

    const animale = await Animale.findByIdAndUpdate(id,resto);

    res.status(200).json({
        msg: 'The animal was update successfully',
        animale
    });

}

const deleteAnimal = async ( req, res) =>{
    const { id } = req.params;
    const animale = await Animale.findByIdAndUpdate(id, {AdoptionStatus: false});
    
    res.status(200).json({
        msg: "The animal was delete",
        animale
    });
}

module.exports = {
    animalePost,
    putAnimal,
    getAnimalId,
    animaleGet,
    deleteAnimal
}