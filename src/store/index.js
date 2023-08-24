import {configureStore} from "@reduxjs/toolkit"
import PolicyDataSlice from "./policyDataSlice"
const store=configureStore({
    reducer:{policyData:PolicyDataSlice}
})
export default store