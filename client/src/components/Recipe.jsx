import style from './recipe.module.css'
import {Link} from 'react-router-dom'

const Recipe = (props) =>{
    const tiposPlatos = props.dishTypes;
    return (

        <div className={style.card}>
            
            <img className={style.img} src={props.image} alt="" />
            <h4 className={style.title}>{props.title}</h4>
            <div className={style.secondCointener}>
                <div>
                    <p className={style.p}>Diets</p>
                        <ul className={style.ul}>
                            {tiposPlatos.map((el, index)=> <li key={index}>{el}</li>)}
                        </ul>
                </div>
                <div>
                    <Link to={`/detail/${props.id}`}>
                        <button className={style.button}>details</button>
                    </Link>
                    
                </div>
            </div>        
            
        </div>
    )
}


export default Recipe;