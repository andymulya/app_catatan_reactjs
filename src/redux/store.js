import { configureStore } from "@reduxjs/toolkit"
import catatanSlice from "./slices/catatanSlice"
import searchSlice from "./slices/searchSlice"

export const store = configureStore({
    reducer: {
        catatan: catatanSlice,
        search: searchSlice
    }
})