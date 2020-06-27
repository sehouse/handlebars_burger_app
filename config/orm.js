//import connection.js into orm.js
const connection = require('../config/connection.js');

//Helper functions for SQL syntax
const printQuestionMarks = (number)=>{
    let array = [];
    for (let i = 0; i < number; i++){
        array.push('?');
    }
    return array.toString();
}

const objToSql = (object) => {
    let array = [];
    for (let key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + '=' + value);
        }
    }
    return array.toString();
}

//ORM SQL functions
const orm = {
    //selectAll
    all: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //insertOne
    create:  (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
  //updateOne
    update: (table, objColVals, condition, cb) => {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

//export orm in module.exports
module.exports = orm;