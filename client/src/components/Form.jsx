import { useState } from "react"
import Input from "./utils/Input"
import style from './form.module.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const Form = ()=>{
    const [urlImage, setUrlImage] = useState("");

    const handleFile = (e)=>{

        const archivo = e.target.files[0];

        console.log(archivo.name);

        const storage = getStorage();
        
        const storageRef = ref(storage, 'recetas/'+ archivo.name);

        const uploadTask = uploadBytesResumable(storageRef, archivo);

        uploadTask.on('state_changed',null,null, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrlImage(downloadURL);
              });
        })
        
        
    }


    
    return (
        <div className={style.conteiner}>
            <Input type="text" nombre="Titulo : " id="titulo"/>

            <div className={style.contenedor}>
                <label className={style.label} htmlFor="descripcion">descripcion :</label>
                <textarea className={style.textarea} name="" id="descripcion" cols="30" rows="5"/>
            </div> 

            <label className={style.label} htmlFor="health">Health Score :</label>
            <input className={style.input} type="number" id="health" min="0" max="100" step="1"/>

            <div className={style.conteinerImage}>
                <div>
                     <label className={style.labelImage} htmlFor="image">Selecciona tu imagen</label>
                     <input className={style.inputImage} type="file" id="image" accept=".jpg, .jpeg, .png" onChange={handleFile}/>
                </div>
                

            {urlImage &&(<img width="250" height="auto" src={urlImage} alt="" />)}
            </div>
            <div className={style.contenedor}>
                <label className={style.label} htmlFor="descripcion">Paso a paso :</label>
                <textarea className={style.textarea} name="" id="descripcion" cols="30" rows="5"/>
            </div> 
            
        </div>
    )
}

export default Form;
