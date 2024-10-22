import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import style from './form.module.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { getDiets } from "../redux/recipesSlice"
import axios from 'axios'

const urlHost = import.meta.env.VITE_URL_HOST;

const Form = ()=>{
    const [urlImage, setUrlImage] = useState("");
    const [dietas, setDietas]  = useState([]);
    const [form , setForm] = useState({});
    const diets = useSelector(state=> state.recipes.diets);
    const dispatch = useDispatch();

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

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(urlHost+"/recipes", { 
            method : 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(form),
        })
             .then(response => {
                if(!response.ok) throw new Error('Ocurrió un error al enviar la solicitud POST');
                return response.json();})
             .then(data=> console.log("datos enviados correctamente", data))
             .catch(error => console.error(error));
        setForm({
            titulo : "",
            descripcion : "",
            healthScore : "",
            image : "",
            instructions : ""

        })     

        //axios.post()

    }

    const handleDiets = (e)=>{
        let value = e.target.value;
        if(dietas.includes(value)){
            setDietas(dietas.filter(el => el !== value));
        }else{
            setDietas([...dietas,value]);
        }
    }

    const handleChange = (e)=>{
       setForm({
        ...form,
        image: urlImage,
        diets : dietas,
        [e.target.id] : e.target.value
       })   
    }

    useEffect(()=>{
        dispatch(getDiets());
    }, [dispatch])
    
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
            <div>
                <label className={style.label}>Selecciona la o las dietas :</label>
                <div className={style.contenedorCheckBox}> 
                {diets.map (el =>(<div key={el.id}>
                                    <input type="checkbox"
                                           id = {el.name}
                                           value = {el.name}
                                           onChange={handleDiets}/>
                                    <label htmlFor={el.name}>{el.name}</label>
                                 </div>))}
                </div>
                
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
