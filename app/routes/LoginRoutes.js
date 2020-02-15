const APIResponse = require('../models/APIResponse');
const express = require('express');
const LoginDAO = require('../dao/LoginDAO');
const app = express.Router();

app.get('/', async(req, res) => {
    try{ 
        const rows = await LoginDAO.login(req.body);
        APIResponse.sendResponse(res, 200, "Login Successfull", rows);
    } catch(e) {
        console.log(e);
        APIResponse.sendResponse(res, 400, "login Failed Please Check the Credentials", e);
    }
});

module.exports = app;
