import { Router } from "express";
import {createRequire} from 'node:module';
import sequelize from "../db.js";

const require = createRequire(import.meta.url);
const data = require('../utils/data.json');

const {Recipe} = sequelize.models;

const ruta = Router();

ruta.get('/', async (req,res)=>{

  try{
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=4311460de7104319ad625a67b6547bde&addRecipeInformation=true&number=100")
    const data = await response.json();
    res.send(data.results);
  } catch(error){
    res.status(404).send(`ocurrio un error : ${error}`)
  }
})

ruta.get('/prueba', async(req,res)=>{
    res.send(data.results);
})

ruta.get('/prueba/:id',(req,res)=>{
   const id = req.params.id;
   const item = data.results.find(el => el.id === Number(id));
   res.send(item);
})

ruta.get('/pruebas',(req,res)=>{
  const {name} = req.query

  const items = data.results.filter(el=> el.title.toLowerCase().includes(name.toLowerCase()) );

  res.send(items);
})



ruta.post('/', async(req,res)=>{
    console.log(req.body);
    
    const recipe  = await Recipe.create(req.body)
    console.log(recipe)

    res.status(200).json({ message: req.body });
})



export default ruta;