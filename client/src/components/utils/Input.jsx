 import style from './input.module.css'
 
const Input = ({type, nombre, id})=>{
    return(
        <div className={style.conteiner}>
        <label className={style.label}htmlFor={id}>{nombre}</label>
        <input className={style.input} type={type} id={id}/>
            
        </div>
    )
}


export default Input;