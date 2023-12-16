import { useSelector, useDispatch } from "react-redux";
import {useParams, Link} from 'react-router-dom';
import { getRecipe } from "../redux/recipesSlice.js";
import style from "./detail.module.css"
import { useEffect } from "react";

const Detail =() =>{
    const item = useSelector(state => state.recipes.recipe);
    const {id} = useParams()

    console.log(id, "detalle")

    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getRecipe(id))
},[dispatch,id])


    return(
        <div className={style.div}>
        <Link to='/'>
            <button className={style.btnAtras}>⬅</button>
        </Link>  
            <div className={style.contenedor}>
            <img className={style.imagen} src={item.image} alt="" />
            <div className={style.summary} dangerouslySetInnerHTML={{ __html: item.summary }}></div>
            
            </div>

            <h3 className={style.healt}>{item.healthScore}</h3>

            <ul className={style.ul}>
                {item.diets && item.diets.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
            
            
        </div>
    )
}

export default Detail;