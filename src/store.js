import { configureStore } from "@reduxjs/toolkit";
import techReducer from './slice'
import formReducer from './pages/Contact us/formSlice.js'
export const store = configureStore({
    reducer:{
        techItems: techReducer,
        formData: formReducer,
    }
})