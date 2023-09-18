import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: 'search',
    initialState: "",
    reducers: {
        searchInput(state, action){
            state = action.payload
            return state
        },
    }
})

export const { searchInput } = searchSlice.actions
export default searchSlice.reducer