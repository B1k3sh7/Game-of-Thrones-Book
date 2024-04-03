import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBooks = createAsyncThunk(
    "book/getAllBooks",
    async (_, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.get("https://www.anapioficeandfire.com/api/books");

            if (status === 200) {
                return data;
            }
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
)