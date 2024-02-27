import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlHost = import.meta.env.VITE_URL_HOST;

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

 export const getDiets = createAsyncThunk('getDiets',async()=>{
    const response = await fetch(`${urlHost}/diets`);
    return response.json();
    
 })

const recipeSlice = createSlice({
    name: "recipes",
    initialState:{
        recipes:[],
        recipe :"",
        diets: []
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
        .addCase(getDiets.fulfilled, (state,action)=>{
            state.diets = action.payload;
        })
    }
})


export default recipeSlice.reducer;