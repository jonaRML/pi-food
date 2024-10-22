import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const urlHost = import.meta.env.VITE_URL_HOST;

const comparadorAsc =(a,b)=>{
        
    if(a.title<b.title){
        return -1;
    }else if(a.title>b.title){
        return 1;
    }else{
        return 0;
    }
}

const comparadorDes = (a,b)=>{
    if(a.title>b.title){
        return -1;
    }else if(a.title<b.title){
        return 1;
    }else{
        return 0;
    }
}

const comparadorMen = (a,b)=>{
    if(a.healthScore<b.healthScore){
        return -1;
    }else if(a.healthScore>b.healthScore){
        return 1;
    }else{
        return 0;
    }
}

const comparadorMas = (a,b)=>{
    if(a.healthScore>b.healthScore){
        return -1;
    }else if(a.healthScore<b.healthScore){
        return 1;
    }else{
        return 0;
    }
}


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
    reducers:{
        ascendente : state =>{
            state.recipes = state.recipes.sort(comparadorAsc);
        },
        descendente : state =>{
            state.recipes = state.recipes.sort(comparadorDes);
        },
        menosSaludable : state =>{
            state.recipes = state.recipes.sort(comparadorMen);
        },
        masSaludable : state =>{
            state.recipes = state.recipes.sort(comparadorMas);
        }
    },
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

export const {ascendente, descendente, menosSaludable, masSaludable} = recipeSlice.actions;


export default recipeSlice.reducer;