var express= require('express'); //Librery we wanna import, associate it with a variable
var app = express(); //Initialize it
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var routes = require('./routes/routes');
routes.assignRoutes(app); //routes are defned in another document



app.listen(3000);
