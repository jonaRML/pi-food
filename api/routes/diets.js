import { Router} from "express";

const ruta = Router();


ruta.get('/', (req, res)=>{
    res.send('hola');
})

export default ruta;