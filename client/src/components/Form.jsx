import Input from "./utils/Input"
import style from './form.module.css'

const Form = ()=>{
    return (
        <div className={style.conteiner}>
            <Input type="text" nombre="Titulo : " id="titulo"/>

            <div className={style.contenedor}>
                <label className={style.label} htmlFor="descripcion">descripcion :</label>
                <textarea className={style.textarea} name="" id="descripcion" cols="30" rows="10"/>
            </div> 

            <label className={style.label} htmlFor="health">Health Score :</label>
            <input className={style.input} type="number" id="health" min="0" max="100" step="1"/>

            <label className={style.labelImage} htmlFor="image">Selecciona tu imagen</label>
            <input className={style.inputImage} type="file" id="image" accept=".jpg, .jpeg, .png" />
        </div>
    )
}

export default Form;
