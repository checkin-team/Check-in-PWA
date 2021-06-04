import { combineReducers } from "redux"
import { LoginReducer } from "./LoginReducer"
import { SignupReducer } from "./SignupReducer"


const authReducer = combineReducers({
  signup: SignupReducer,
  login: LoginReducer
})

export default authReducer
