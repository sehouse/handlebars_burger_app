const orm = require("../config/orm.js");

const burger = {
    all: (callback) => {
        orm.all("burgers", (response) => {
            callback(response);
        });
    },
    create: (name, callback) => {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], callback);
    },
    update: (id, callback) => {
        let condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, callback);
    }
};

module.exports = burger;