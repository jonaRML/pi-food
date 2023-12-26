import { useState } from "react"
import style from './form.module.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const Form = ()=>{
    const [urlImage, setUrlImage] = useState("");
    const [form , setForm] = useState({});

    const handleFile = (e)=>{

        const archivo = e.target.files[0];

        console.log(archivo.name);
        //subir la foto a firabase y obtener el enlace
        const storage = getStorage();
        const storageRef = ref(storage, 'recetas/'+ archivo.name);
        const uploadTask = uploadBytesResumable(storageRef, archivo);

        uploadTask.on('state_changed',null,null, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrlImage(downloadURL);
              });
        })
        
        
    }

    const handleSubmit = ()=>{

        
         
    }

    const handleChange = (e)=>{
       setForm({
        ...input,
        image: urlImage,
        [e.target.id] : [e.target.value]
       })   
    }


    
    return (
        <div className={style.conteiner}>
            <div className={style.contenedor}>
                <label className={style.label} htmlFor="titulo">Titulo : </label>
                <input className={style.input} type="text" id="titulo" value={form.titulo} onChange={handleChange}/>
           </div>

            <div className={style.contenedor}>
                <label className={style.label} htmlFor="descripcion">descripcion :</label>
                <textarea className={style.textarea} id="descripcion" cols="30" rows="5" value={form.descripcion} onChange={handleChange}/>
            </div> 

            <label className={style.label} htmlFor="healthScore">Health Score :</label>
            <input className={style.input} type="number" id="healthScore" min="0" max="100" step="1" value={form.health} onChange={handleChange}/>

            <div className={style.conteinerImage}>
                <div>
                     <label className={style.labelImage} htmlFor="image">Selecciona tu imagen</label>
                     <input className={style.inputImage} type="file" id="image" accept=".jpg, .jpeg, .png" onChange={handleFile}/>
                </div>
                

            {urlImage &&(<img width="250" height="auto" src={urlImage} alt="" />)}
            </div>
            <div className={style.contenedor}>
                <label className={style.label} htmlFor="instructions">Paso a paso :</label>
                <textarea className={style.textarea} id="instructions" cols="30" rows="5" value={form.instructions}  onChange={handleChange}/>
            </div> 

            <button className={style.button} onClick={handleSubmit}>Subir Receta</button>
            
        </div>
    )
}

export default Form;
