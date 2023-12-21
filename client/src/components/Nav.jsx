import SearchBar from "./SearchBar";
import style from "./nav.module.css"
import {Outlet,Link} from 'react-router-dom'

const Nav =()=>{
    return(
        <>
            <div className={style.contenedor}>
             <nav>
                <ul className={style.ul}>
                    <li className={style.li}>home</li>
                    <li className={style.li}>about</li>
                    <Link to='/createRecipe'>
                        <li className={style.li}>createRecipe</li>
                    </Link>
                    
                </ul>
             </nav>
            <SearchBar/>
            
            </div>

            <Outlet/>
        </>
        
    )
}

export default Nav;