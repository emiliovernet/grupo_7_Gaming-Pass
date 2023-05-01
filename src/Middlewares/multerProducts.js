const express = require('express');
const router = express.Router();

const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file,cb) => {
        cb(null, "./src/public/images");
    },
    filename: (req, file, cb) => {
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
})

const subirArchivo = multer({storage})


module.exports = subirArchivo;