const APIResponse = require('../models/APIResponse');
const express = require('express');
const ResgisterDAO = require('../dao/RegisterDAO');
const app = express.Router();


app.post('/Register', async(req, res) => {
    try {
        const rows = await ResgisterDAO.addUser(req.body);
       if(rows.affectedRows > 0) {
      APIResponse.sendResponse(res, 200, "Registered Successfully");
      } else {
        throw Error("Failed");
      }
      } catch(e) {
        console.log(e);
        APIResponse.sendResponse(res, 400, "Failed", e);
      }
});

module.exports = app;