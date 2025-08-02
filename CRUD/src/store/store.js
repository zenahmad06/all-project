import { configureStore } from "@reduxjs/toolkit";
import FormReducers from '../models/FormSlice'
//buat store
const store = configureStore({
    reducer:{
        formdata:FormReducers
    }
})

export default store