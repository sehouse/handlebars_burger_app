const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (request, response) => {
    response.redirect("/burgers");
});

router.get("/burgers", (request, response) => {
    burger.all((burgerData) => {
        response.render("index", {
            burger_data: burgerData
        });
    });
});


router.post("/burgers/create", (request, response) => {

    burger.create(request.body.burger_name, (result) => {
        console.log(result);
        response.redirect("/");
    });
});

router.put("/burgers/:id", (request, response) => {
    burger.update(request.params.id, (result) => {
        console.log(result);
        response.sendStatus(200);
    });
});

module.exports = router;