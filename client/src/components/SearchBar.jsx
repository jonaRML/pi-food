import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../redux/recipesSlice";
import style from "./searchBar.module.css"

const SearchBar = () =>{
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(getRecipes(input));
    setInput("");
}

     return(
        <div>
            <form className={style.form} onSubmit={handleSubmit}>      
                <input className={style.buscador} type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <input className={style.submit} type="submit" value="Buscar" />
            </form>
        </div>
    )
}

export default SearchBar;