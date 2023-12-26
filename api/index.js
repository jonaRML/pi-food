import express from "express";
import {sequelize} from "./db.js";
import diets from './routes/diets.js';
import recipes from './routes/recipes.js';
import cors from 'cors'

const app = express();


app.use(cors());

app.use('/diets', diets);
app.use('/recipes', recipes);


app.get('/',(req,res)=>{
    res.send("hola soy el get");
})

const PORT = 3000

sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`aplicacion expres corriendo en el puerto ${PORT}`)
    })
})
