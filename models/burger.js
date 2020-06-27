//import orm.js into burger.js
const orm = require('../config/orm.js');
//create the code to call the orm functions using burger specific input for the orm

const burger = {
    all: (cb) => {
        orm.all('burgers', (result) => {
            cb(result)
        });
    },
    create: (cols, vals, cb) => {
        orm.create('burgers', cols, vals, (result) => {
            cb(result);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update('burgers', objColVals, condition, (result) => {
            cb(result);
        });
    }
};

//export at the end
module.exports = burger;