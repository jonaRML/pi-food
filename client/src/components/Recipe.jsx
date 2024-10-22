import style from './recipe.module.css'
import health from '../assets/health.svg'
import {Link} from 'react-router-dom'

const Recipe = (props) =>{
    const diets = props.diets;
    return (

        <div className={style.card}>
            
            <img className={style.img} src={props.image} alt="" />
            <h4 className={style.title}>{props.title}</h4>
            <div className={style.health}>
            <img src={health} alt='icon' />
            <p>{props.health}</p>
            </div>
            <div className={style.secondCointener}>
                <div>
                    <p className={style.p}>Diets</p>
                        <ul className={style.ul}>
                            {diets.map((el, index)=> <li key={index}>{el}</li>)}
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