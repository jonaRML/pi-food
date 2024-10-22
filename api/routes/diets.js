import { Router} from "express";
import sequelize from "../db.js";

const ruta = Router();

const {Diet} = sequelize.models;

ruta.get('/', async (req, res)=>{
    const dietas = await Diet.findAll();
    console.log(dietas);
    res.send(dietas);
})

export default ruta;