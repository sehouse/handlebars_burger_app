const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const handlebars = require('express-handlebars');
const route = require('./controllers/burger_controller.js');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.engine('handlebrs', handlebars({
    defaultLayout: 'main'
})); 

app.set('view engine', 'handlebars');

app.use(route);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
})