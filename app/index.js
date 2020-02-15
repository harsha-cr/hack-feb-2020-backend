const express=require("express");
const bodyParser=require('body-parser');
var process = require('process');

var app = express();

//const registerController=require('./routes/registrationRoutes');

ProdReady.make(app);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//app.use('/api/register/', registerController);

const port = process.env.PORT || 3000;

console.log("Services at port = ", port);
app.listen( port);