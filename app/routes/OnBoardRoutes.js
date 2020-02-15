const express = require('express');
const app = express.Router();
const OnBoardDAO = require("../dao/OnBoardDAO");
const APIResponse = require("../models/APIResponse");
const fileUploader = require('express-fileupload');

app.use(fileUploader());


app.post('/', async (req, res) => {
 
const file = req.files.data;

if (file.mimetype !== 'text/csv') {
    APIResponse.sendResponse(res, 400, 'Un supported file, ".xlsx" files only');
    return false
}

const target = `uploads/${new Date().getTime()}${file.name}`;

file.mv(target, (err, result) => {
    if (err) {
        APIResponse.sendResponse(res, 500, 'Unable to move file', err);
        return false
    }

    const OnboardingUtility = require('../Utils/OnBoardingUtility');
    const records = OnboardingUtility.readExcelFileContent(target);

    if (!records || !records.success || !records.success.length) {
        APIResponse.sendResponse(res, 400, 'Data in wrong format', records);
        return;
    }

    (async () => {
        try {
            const insertResult = await OnBoardDAO.addLists(records.success);
            APIResponse.sendResponse(res, 200, 'Data Inserting completed', records);
        } catch (e) {
            APIResponse.sendResponse(res, 500, 'Data Inserting failed', e);
        }

    })();

    const fs = require('fs');
    try {
        fs.unlink(target, (e) => {
            if (e) {
                console.log(`Deleting the file manually ${target}, error = `, e)
            }
        });
    } catch (e) {
        console.log(`Deleting the file manually ${target}, error = `, e)
    }

});
});


app.get('/AllOnBoardedItems', async(req, res) => {
    try{
        const rows = await OnBoardDAO.getAll();
        APIResponse.sendResponse(res, 200, "Onboarded Items Are", rows);
    } catch(e) {
        APIResponse.sendResponse(res, 400, "Failed To get DATA", e);
    }
});


app.get('/title/:title', [
    check('title').isNumeric()
  ], async (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    try {
      const title = req.params.title;
      const rows = await OnBoardDAO.getByTitle(title);
      APIResponse.sendResponse(res, 200, "Success", rows);
    } catch (e) {
      APIResponse.sendResponse(res, 400, "Failed", e);
    }
  });

module.exports = app;