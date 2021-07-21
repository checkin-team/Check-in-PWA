import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import OrderStatus from '../components/OrderStatus';
import Trending from '../components/Trending';
import MenuItem from '../components/MenuButton';
import CartIcon from '../../../assets/home/shopping_cart.svg';
import Badge from '@material-ui/core/Badge';
import BillingBottomBar from '../components/BillingBottomBar';
// import Box from '@material-ui/core/Box'
import { _load_orders, _load_restaurent_details, _load_trending_dishes, _load_user_details } from '../middleware'
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom';
import {loadRequestData} from '../middleware/index';
import CircularProgress from '@material-ui/core/CircularProgress';

function HomePage(props) {
    const { loadRestaurentDetails, state, loadOrders, loadTrendingDishes ,loadRequestData_,login,getUser} = props
    const { details } = state
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    document.body.style.backgroundColor = "#fff"
    
    useEffect(() => {
        loadRestaurentDetails()
        loadOrders()
        loadTrendingDishes()
        loadRequestData_();
        getUser();
    }, [])
    useEffect(() => {
        loadRestaurentDetails()
        loadOrders()
        loadTrendingDishes()
        loadRequestData_();
        getUser();
    }, [login.session.isLoading])

    const cartStyle = {
        position : 'absolute',
        top: '1.75vh',
        right: '4.5vw',
    }

    const cartLength = props.cart.items.data.length;

    const history = useHistory();

    // useEffect(() => {
    //     if (details.data.restaurant.pk)
    //         loadTrendingDishes()
    // }, [details.data.restaurant.pk])
    if(state.details.isLoading===true)
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
    <CircularProgress style={{color:"#ff5656"}} size={50} />
    </div>
  
    return (
        <div>
            <div >

                <div>
                    <div
                        style={{ width: '100vw', borderBottom: "1px solid lightgrey", boxShadow: '0px 1.5px 1px 0px lightgrey'}}
                    >
                        <div style={{ margin: '15px',marginLeft: '10px' ,marginBottom: '0'}}><div style={{ color: "#ff5656", fontWeight: 600, marginBottom: '0',fontSize: '14px' }}>Room  301</div>
                            <div style={{ fontSize: '10px', fontWeight: 600, marginTop: '0px', color: '#6d6d6d' }}> 
                                {details.data.name ? <h3>{details.data.name}</h3> : <h3 style={{marginTop : '4px',marginBottom: '1vh',fontSize: '12px'}}>Oyo Townhouse 032</h3>}
                            </div>
                            <div style={cartStyle} onClick={() => history.push('/viewcart')}>
                                <Badge style={{ marginBottom: "7vh", marginRight: "-9vw" }} badgeContent={cartLength} color="error">
                                </Badge>
                                <img style={{width: '8vw'}} src={CartIcon} alt="cart icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel details={details}/>
                <Services />
                <OrderStatus />
                <Trending />
                 <MenuItem style={{position: "fixed" ,right:"100px"}}/>
                <div style={{
                    width: "100%",
                    height: "45px",
                    overflow: "hidden",
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: "#0295aa",
                }}>
                    <BillingBottomBar />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state.home,
    cart: state.cart,
    login: state.authentication.login,
})

const mapDispatchToProps = (dispatch) => ({
    loadRestaurentDetails: () => dispatch(_load_restaurent_details()),
    loadOrders: () => dispatch(_load_orders()),
    loadTrendingDishes: () => dispatch(_load_trending_dishes()),
    loadRequestData_: ()=>dispatch(loadRequestData()),
    getUser: ()=>dispatch(_load_user_details())
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)