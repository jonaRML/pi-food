import {useDispatch, useSelector} from 'react-redux'
import { getAllrecipes, getDiets } from '../redux/recipesSlice.js'
import { useState,useEffect } from 'react'
import Recipe from './Recipe.jsx'
import style from './recipes.module.css'


const Recipes = ()=>{
    const [starItem , setStarItem] = useState(0);
    const [endItem, setEndItem] = useState(9);

    const dispatch = useDispatch();
    const recipes = useSelector(state=> state.recipes.recipes );
    const diets = useSelector(state=> state.recipes.diets);
    
    let array = recipes.slice(starItem, endItem)

    const handleAdelante = ()=>{

        setStarItem(starItem+9);
        setEndItem(endItem+9);
    }

    const handleAtras = () =>{
        setStarItem(starItem-9);
        setEndItem(endItem-9);
    }

    

useEffect( ()=>{
    dispatch(getAllrecipes())
    dispatch(getDiets());
}
,[dispatch])


    return(
        <>
        <div className={style.selectContenedor}>
        <select className={style.select} name='ordenar'>
            <option style={{color: 'gray'}} >Ordenar por :</option>
            <option className={style.option} value="Alfabeticamente">Ascendentemente</option>
            <option className={style.option} value="Healt Score">Descendentemente</option>
            <option className={style.option} value="Healt Score">Menos Saludable</option>
            <option className={style.option} value="Healt Score">Mas Saludable</option>
        </select>

        <select className={style.select} name='ordenar'>
            <option style={{color: 'gray'}} >Filtrar por tipo de dieta:</option>
            {diets.map(el=>(<option className={style.option} key={el.id}>{el.name}</option>))}
        </select>
        </div>
        
        <div className={style.contenedor}>
         {array.map(el=> (<Recipe 
                                key={el.id} 
                                title={el.title} 
                                image={el.image}
                                dishTypes={el.dishTypes}
                                id={el.id}
                                />))}
        </div>
        <div className={style.contenedorBtn}>
           <button  style={starItem<9 ?{backgroundColor : 'gray'}:{}} disabled={starItem<9} onClick={handleAtras} className={style.boton}>Atras</button>
           <button  style={endItem >= recipes.length ?{backgroundColor : 'gray'}:{}} disabled={endItem >= recipes.length }onClick={handleAdelante} className={style.boton}>adelante</button>
        </div>
        </>
    )
}

export default Recipes