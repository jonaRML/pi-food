import { useState } from "react";
import style from "./searchBar.module.css"

const SearchBar = () =>{
 const [input, setInput] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
}

     return(
        <div>
            <form className={style.form} onSubmit={handleSubmit}>      
                <input className={style.buscador} type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <input  className={style.submit}type="submit" value="Buscar" />
            </form>
        </div>
    )
}

export default SearchBar;