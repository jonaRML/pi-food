import SearchBar from "./SearchBar";
import style from "./nav.module.css"
import {Outlet} from 'react-router-dom'

const Nav =()=>{
    return(
        <>
            <div className={style.contenedor}>
             <nav>
                <ul className={style.ul}>
                    <li className={style.li}>home</li>
                    <li className={style.li}>about</li>
                </ul>
             </nav>
            <SearchBar/>
            
            </div>

            <Outlet/>
        </>
        
    )
}

export default Nav;