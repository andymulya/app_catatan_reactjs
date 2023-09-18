import { createSlice } from "@reduxjs/toolkit"
import { getInitialData } from "../../utils"

const catatanSlice = createSlice({
    name: 'catatan',
    initialState: getInitialData,
    reducers: {
        addData(state, action){
            state.push(action.payload)
        },
        removeItemById(state, action){
            const findIndexItem = state.findIndex((data) => data.id == action.payload)
            if(findIndexItem != -1) state.splice(findIndexItem, 1)
        },
        isArchived(state, action){
            const data = state.find((data) => data.id == action.payload)
            data.archived = !data.archived
        }
    }
})

export const { addData, removeItemById, isArchived } = catatanSlice.actions
export default catatanSlice.reducer