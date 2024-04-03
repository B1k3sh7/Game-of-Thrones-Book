import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/Book/bookSlice"

export const store = configureStore({
    reducer: {
        book: bookReducer,
    },
})