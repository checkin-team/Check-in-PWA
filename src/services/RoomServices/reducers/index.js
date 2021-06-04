import { combineReducers } from "redux"
import { RoomReducer } from "./RoomReducer"


const roomReducer = combineReducers({
    roomservicedata: RoomReducer
})

export default romeReducer