import { createSlice } from '@reduxjs/toolkit'


const user = createSlice({
    name: 'user',
    initialState: {
        user: false,
        validate:false,
        country: [],
        bank: []
    },
    reducers: {

        login: (state, action) => {

            state.user = action.payload
        },
        validateFunc:(state,action)=>{
        //    console.log(action.payload)
           state.validate=action.payload
        },

        bankFunc: (state, action) => {
            console.log(action.payload)
            // return
             state.bank = [...state.bank, action.payload] 
        },
        removeBank: (state, action) => {
            let filterFunc = state.bank.filter((val) => val !== action.payload)
            // return 
            state.bank = [...filterFunc] 
        },
        countryFunc: (state, action) => {
            console.log(action.payload)
            // return 
            state.country = [...state.country , action.payload] 
        },
        removeCountry: (state, action) => {
            let filterFunc = state.country.filter((val) => val !== action.payload)
            // return 
            state.country= [...filterFunc] 
        },
    }

})


export const { login, countryFunc, removeCountry, bankFunc, removeBank,validateFunc } = user.actions

export const userReducer = user.reducer
