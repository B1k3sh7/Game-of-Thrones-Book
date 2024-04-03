import { createSlice } from "@reduxjs/toolkit";
import { getAllBooks } from "./apiCall/getAllBooks";


const initialState = {
    error: "",
    books: [],
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        allBooks: state => {
            state.books = []
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllBooks.pending, (state) => {
                state.error = "";
            })

            .addCase(getAllBooks.fulfilled, (state, { payload }) => {
                state.books = payload;
            })

            .addCase(getAllBooks.rejected, (state, { payload }) => {
                state.error = payload;
            })
    }
});

export const { allBooks } = bookSlice.actions;

export default bookSlice.reducer;