import { createSlice } from "@reduxjs/toolkit"
import { getInitialData } from "../../utils"

const catatanSlice = createSlice({
    name: 'catatan',
    initialState: {
        datas: [...getInitialData()],
        detailItem: {}
    },
    reducers: {
        addData(state, action){
            state.datas.push(action.payload)
        },
        getDetail(state, action){
            const findItem = state.datas.find((data) => data.id === action.payload)
            state.detailItem = findItem
        },
        removeItemById(state, action){
            const findIndexItem = state.datas.findIndex((data) => data.id == action.payload)
            if(findIndexItem != -1) state.datas.splice(findIndexItem, 1)
        },
        isArchived(state, action){
            const data = state.datas.find((data) => data.id == action.payload)
            data.archived = !data.archived
        }
    }
})

export const { addData, getDetail, removeItemById, isArchived } = catatanSlice.actions
export default catatanSlice.reducer