'use strict';

const multer = require('multer');
const { extname } = require('path');
const uuid = require('uuid/v1');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
     cb(null, `${uuid()}${extname(file.originalname)}`);
    }
});

module.exports = multer({ storage });