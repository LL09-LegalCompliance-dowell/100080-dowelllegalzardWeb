import { createSlice } from "@reduxjs/toolkit";
const PolicyDataSlice=createSlice({
    name:"PolicyDataSlice",
    initialState:{data:{}},
    reducers:{
        addData(state,action){
            state.data={...state.data,...action.payload}
        },
        emptyData(state){
            state.data={}
        },
    }
})

export const{addData,emptyData}=PolicyDataSlice.actions
export default PolicyDataSlice.reducer