const path = require("path");

const {body} = require("express-validator");


const validaciones = [
    body("name").notEmpty().withMessage('Nombre requerido'),
    body("price").notEmpty().withMessage('Precio requerido').bail().isEmail().withMessage("Formato de Email invalido"),
    body("description").notEmpty().withMessage('Descripción requerida'),
    body("image").custom((value, { req }) => {
            let archivo = req.file;
            let extensionValida = [".jpg" ,".png"];

            if(!archivo){
                throw new Error ("Debes subir una imagen");
            }else{
                let extensionArchivo = path.extname(archivo.originalname);
                if(!extensionValida.includes(extensionArchivo)) {
                    throw new Error (`Los formatos válidos son ${extensionValida.join(', ')}`);
                }
            }

            return true; 
    })


]


module.exports = validaciones