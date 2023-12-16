import {configureStore} from '@reduxjs/toolkit';
import recipes from './recipesSlice.js'

const store = configureStore({
    reducer:{
        recipes
    }
})

export default store;