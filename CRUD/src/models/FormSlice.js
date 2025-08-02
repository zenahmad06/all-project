import {createSlice} from '@reduxjs/toolkit'
import { useState } from 'react'
// buat nampung data
const FormSlice = createSlice({
    name:'form',
    initialState:[

    ],
    reducers:{
        addData : (state,action) => {
            state.push(action.payload)
        },
        // add delete data
        deleteData : (state,action) => {
           return state.filter((_,index) => index != action.payload)
        },
        updateDat : (state,action) =>{
            //search index
            const searchData = state.findIndex((_,index) => index == action.payload.id);
            //update cari objectnya
            state[searchData].title = action.payload.title
            state[searchData].content = action.payload.content
            
        } 

    }
})

// export reducer
export const {addData,deleteData,updateDat} = FormSlice.actions

// IMPORT slice ke store
export default FormSlice.reducer