import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"


const PrivateRoute=({...rest})=>{
    const auth = useSelector((state)=>({...state}));
    console.log(auth);
    return (auth.authentication.signup.login.isLoggedIn ===true?<Route {...rest}></Route>:<Redirect to='/'></Redirect>);
}

export default PrivateRoute;