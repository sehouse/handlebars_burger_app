-- create burgers_db
CREATE DATABASE burgers_db;

--switch to burgers_db
USE burgers_db;

--create burgers table with fields:

CREATE TABLE burgers(

    --id: aut incrementing int

    id int NOT NULL AUTO_INCREMENT,

    --burger_name: string

    burger_name VARCHAR(100) NOT NULL,

    --devoured: boolean

    devoured BOOLEAN NOT NULL,

    --id serves as primary key
    PRIMARY KEY(id)
);


    
    