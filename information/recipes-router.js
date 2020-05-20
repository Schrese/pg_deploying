const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes)
        })
        .catch(err => {
            console.log('err in get', err)
            res.status(500).json({ errorMessage: 'cannot get recipes' })
        })
})

router.get('/:id/shopping', (req, res) => {
    const id = req.params.id;

    Recipes.getShoppingList(id)
        .then(shopping => {
            res.json(shopping)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'cannot get ingredients for this recipe' })
        })
})

router.get('/:id/steps', (req, res) => {
    const id = req.params.id;

    Recipes.getInstructions(id)
        .then(steps => {
            res.json(steps)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'cannot get instructions for this recipe' })
        })
})

module.exports = router;