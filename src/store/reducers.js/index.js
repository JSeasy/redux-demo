import reducer from "./reducer"
import reducer1 from "./reducer1"
import {combineReducers} from "redux"
export default combineReducers(
    {reducer,reducer1}
)