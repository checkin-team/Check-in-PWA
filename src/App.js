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
import ApplyPrommos from './services/Checkout/components/ApplyPrommos';
import MyRequestPage from './services/RoomServices/pages/RoomServicesPage';
import ViewOrders from "./services/order/pages/ViewOrders";
import PaymentSuccessful from "./services/order/pages/PaymentSuccessful";
import ScrollToTop from 'react-router-scroll-top';
import OrderSuccessful from "./services/order/pages/OrderSuccessful"
import PrivateRoute from "./PrivateRoute"
// import { useSelector } from "react-redux"
// import axios from "axios";
function App(props) {
  const { state } = props
  useEffect(() => {

  }, [])

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            {
              state.signup.login.isLoggedIn ?
                <>
                  {/* <Route path="/settlebill" component={CheckoutPage} />
                  <Route path="/viewcart" component={ViewCartPage} />
                  <Route path="/home" component={HomePage} />
                  <Route path="/menu" component={MenuPage} />
                  <Route path="/sides" component={MenuCustomisation} />
                  <Route path="/Apply" component={ApplyPrommos} />
                  <Route exact path="/" component={HomePage} />
                  <Route path="/requests" component={MyRequestPage} />
                  <Route path="/order" component={ViewOrders} />
                  <Route path="/payment" component={PaymentSuccessful} />
                  <Route path="/order-successful" component={OrderSuccessful} />
                   */}
                  <PrivateRoute path="/settlebill" component={CheckoutPage} />
                  <PrivateRoute path="/viewcart" component={ViewCartPage} />
                  <PrivateRoute path="/home" component={HomePage} />
                  <PrivateRoute path="/sides" component={MenuCustomisation} />
                  <PrivateRoute path="/Apply" component={ApplyPrommos} />
                  <PrivateRoute exact path="/" component={HomePage} />
                  <PrivateRoute path="/requests" component={MyRequestPage} />
                  <PrivateRoute path="/order" component={ViewOrders} />
                  <PrivateRoute path="/payment" component={PaymentSuccessful} />
                  <PrivateRoute path="/order-successful" component={OrderSuccessful} />
                  <PrivateRoute path="/menu" component={MenuPage} />
                     
                </>
                :
                <>
                <PrivateRoute path="/order" component={ViewOrders} />
                <PrivateRoute path="/requests" component={MyRequestPage} />
                <PrivateRoute path="/settlebill" component={CheckoutPage} />
                <PrivateRoute path="/menu" component={MenuPage} />
                <Route exact path="/" component={SignupPage} />
                <Route path="/signup" component={SignupPage} />
                </>
            }
            <div style={{ background: "yellow", width: "100%", padding: "100px" }} >
              Hello
            </div>
          </Switch>
        </ScrollToTop>
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