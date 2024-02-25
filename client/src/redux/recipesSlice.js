import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const urlHost = import.meta.env.VITE_URL_HOST;
 console.log(urlHost,"host");
export const getRecipe = createAsyncThunk('getRecipe', async(id)=>{
    const response = await fetch(`${urlHost}/recipes/prueba/${id}`)
    const data = await response.json();
    return data;
})

export const getAllrecipes = createAsyncThunk('getAllrecipes', async()=>{
    const response = await fetch(`${urlHost}/recipes/prueba`);
    const data = await response.json();
    return data;
 })

 export const getRecipes = createAsyncThunk('getRecipes', async(valor)=>{
    const response = await fetch(`${urlHost}/recipes/pruebas?name=${valor}`);
    const data = await response.json();
    return data;
 })

const recipeSlice = createSlice({
    name: "recipes",
    initialState:{
        recipes:[],
        recipe :""
    },
    reducers:{},
    extraReducers: builder =>{
        builder
        .addCase(getRecipe.fulfilled, (state,action)=>{
            state.recipe = action.payload;
        } )
        .addCase(getAllrecipes.fulfilled, (state, action)=> {

            state.recipes = action.payload;
        })
        .addCase(getRecipes.fulfilled, (state,action)=>{
            state.recipes = action.payload;

        })
    }
})


export default recipeSlice.reducer;