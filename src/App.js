// import { MenuItem } from "@material-ui/core";
import React, { useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignupPage from "./services/Authentication/pages/SignupPage"
import HomePage from './services/Home/pages/HomePage'
import MenuPage from './services/MenuServices/pages/MenuPage'
// import RoomServices from './services/RoomServices/components/RoomServices'
import { connect } from "react-redux"
import MenuCustomisation from './services/MenuServices/components/MenuCustomisation'
import ViewCartPage from "./services/Cart/pages/ViewCartPage"
import CheckoutPage from './services/Checkout/pages/CheckoutPage'
import MyRequestPage from './services/RoomServices/components/MyRequest';

// import { useSelector } from "react-redux"
// import axios from "axios";
function App(props) {
  const { state } = props
  useEffect(() => {

  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {
            state.signup.login.isLoggedIn ?
              <>
                
                <Route path="/settlebill" component={CheckoutPage} />
                <Route path="/viewcart" component={ViewCartPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/menu" component={MenuPage} />
                <Route path="/sides" component={MenuCustomisation} />
                <Route exact path="/" component={HomePage} />
                <Route path="/requests" component={MyRequestPage} />
              </>
              :
              <>
                <Route exact path="/" component={SignupPage} />
                <Route path="/signup" component={SignupPage} />
              </>
          }
          <div style={{ background: "yellow", width: "100%", padding: "100px" }} >
            Hello
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.authentication
  }
}

export default connect(mapStateToProps, null)(App)