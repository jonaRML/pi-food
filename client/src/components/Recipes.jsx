import {useDispatch, useSelector} from 'react-redux'
import { getAllrecipes } from '../redux/recipesSlice.js'
import { useState,useEffect } from 'react'
import Recipe from './Recipe.jsx'
import style from './recipes.module.css'


const Recipes = ()=>{
    const [starItem , setStarItem] = useState(0);
    const [endItem, setEndItem] = useState(9);

    const dispatch = useDispatch();
    const recipes = useSelector(state=> state.recipes.recipes );
    
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
}
,[dispatch])


    return(
        <>
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