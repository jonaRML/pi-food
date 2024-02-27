import { Router} from "express";
import sequelize from "../db.js";

const ruta = Router();

const {diet} = sequelize.models;

ruta.get('/', async (req, res)=>{
    const dietas = await diet.findAll();
    res.send(dietas);
})

export default ruta;