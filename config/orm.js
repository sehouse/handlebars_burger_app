const connection = require("../config/connection.js");

const printQuestionMarks = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

const objToSql = (ob) => {
    let arr = [];

    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

const orm = {
    all: (tableInput, callback) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString,  (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    create: (table, cols, vals, callback) => {
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
            callback(result);
        });
    },

    update: (table, objColVals, condition, callback) => {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, (err, result)=> {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};


module.exports = orm;