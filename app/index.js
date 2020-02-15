const express=require("express");
const bodyParser=require('body-parser');
var process = require('process');

var app = express();

const loginController = require('./routes/LoginRoutes');
const registerController = require('./routes/RegisterRoutes');
const onBoardController= require('./routes/OnBoardRoutes');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/onboard/', onBoardController);
app.use('/api/register/', registerController);
app.use('/api/login/', loginController);

const port = process.env.PORT || 3000;

console.log("Services at port = ", port);
app.listen( port);