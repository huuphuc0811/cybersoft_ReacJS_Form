import { configureStore } from "@reduxjs/toolkit"
import formValidReducer from "./../form-valid/slice"
export const store = configureStore({
    reducer: {
        // co nhieu child reducer 
        formValidReducer: formValidReducer,
    },
})