const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { animalePost,
    putAnimal,
    getAnimalId,
    animaleGet,
    deleteAnimal } = require('../controllers/animal.controller');


const router = Router();

router.get("/", animaleGet);

router.get(
    "/:id",
    [
        check('id', 'this id is not valid, please check agains').isMongoId(),
        validarCampos
    ], getAnimalId);

router.post(
    "/",
    [
        check("typeAnimal", "The Animal type is mandatory").not().isEmpty(),
        check("AnimalMeal", "The type animal is mandatory").not().isEmpty(),
        check("numCasiller", "The locker number there by not empty").not().isEmpty(),
        validarCampos
    ], animalePost);

router.put(
    "/:id",
    [
        check('id', 'this id is not valid, please check again').isMongoId(),
        validarCampos
    ], putAnimal),


    router.delete(
        "/:id",
        [
            check('id', 'The id is not valid').isMongoId(),
            validarCampos
        ], deleteAnimal);

module.exports = router;