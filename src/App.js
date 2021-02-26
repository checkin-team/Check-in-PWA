import { MenuItem } from "@material-ui/core";
import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignupPage from "./services/Authentication/pages/SignupPage"
import HomePage from './services/Home/pages/HomePage'
import MenuPage from './services/MenuItem/pages/MenuPage'
// import RoomServices from './services/RoomServices/components/RoomServices'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Home" component={HomePage} />
           <Route path="/Menu" component={MenuPage} /> 
          <Route path="/" component={SignupPage} />
          <Route path="/signup" component={SignupPage} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;