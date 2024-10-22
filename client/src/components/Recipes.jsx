import {useDispatch, useSelector} from 'react-redux'
import { getAllrecipes, getDiets, ascendente, descendente, menosSaludable, masSaludable } from '../redux/recipesSlice.js'
import { useState,useEffect } from 'react'
import Recipe from './Recipe.jsx'
import style from './recipes.module.css'


const Recipes = ()=>{
    const [starItem , setStarItem] = useState(0);
    const [endItem, setEndItem] = useState(9);
    const dispatch = useDispatch();
    const recipes = useSelector(state=> state.recipes.recipes );
    const [array, setArray] = useState([]);
    const diets = useSelector(state=> state.recipes.diets);

    const handleAdelante = ()=>{

        setStarItem(starItem+9);
        setEndItem(endItem+9);
    }

    const handleAtras = () =>{
        setStarItem(starItem-9);
        setEndItem(endItem-9);
    }

    const handleSelect = (e) =>{
        if(e.target.value === "Ascendente") {
            dispatch(ascendente());
        }else if(e.target.value === "Descendente"){
            dispatch(descendente());
        }else if(e.target.value === "Menos Saludable"){
            dispatch(menosSaludable());
        }else if(e.target.value === "Mas Saludable"){
            dispatch(masSaludable())
        }
    }

    const handleDiets = (e) =>{
        let filtrados = recipes.filter(recipe => recipe.diets.includes(e.target.value.toLowerCase()));
        setArray(filtrados)

    }

useEffect( ()=>{
    dispatch(getAllrecipes())
    dispatch(getDiets());  
},[dispatch])

useEffect(() => {
    setArray(recipes.slice(starItem,endItem));
}, [recipes, starItem, endItem]);


    return(
        <>
        <div className={style.selectContenedor}>
        <select className={style.select} name='ordenar' onChange={handleSelect}>
            <option style={{color: 'gray'}} >Ordenar por :</option>
            <option className={style.option} value="Ascendente">Ascendentemente</option>
            <option className={style.option} value="Descendente">Descendentemente</option>
            <option className={style.option} value="Menos Saludable">Menos Saludable</option>
            <option className={style.option} value="Mas Saludable">Mas Saludable</option>
        </select>

        <select className={style.select} name='ordenar' onChange={handleDiets}>
            <option style={{color: 'gray'}} >Filtrar por tipo de dieta:</option>
            {diets.map(el=>(<option className={style.option} value={el.name} key={el.id}>{el.name}</option>))}
        </select>
        </div>
        
        <div className={style.contenedor}>
          
         {array.map(el=> (<Recipe 
                                key={el.id} 
                                title={el.title} 
                                image={el.image}
                                diets={el.diets}
                                id={el.id}
                                health={el.healthScore}
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