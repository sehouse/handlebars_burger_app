const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

//Get route
router.get('/burgers', (request, response) => {
    burger.all((data) => {
        response.render('index', {
            burger_data: data
        });
    });
});

//Post route
router.post('/burgers/create', (request, response) => {
    burger.create(request.body.burger_name, (result) => {
        console.log(result);
        response.redirect('/');
    });
});

//Put route
router.put('/burgers/:id', (request, response) => {
    burger.update(request.params.id, (result) => {
        console.log(result);
        response.sendStatus(200);
    });
});

module.exports = router;