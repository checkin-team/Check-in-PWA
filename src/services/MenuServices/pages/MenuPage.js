import React, { useEffect } from 'react'
import AbsoluteItems from '../components/AbsoluteComponents'
import Offers from '../components/Offers'
import CategoriesMenu from '../components/CategoriesMenu'
import Items from '../components/FoodCategories'
import BrowseMenu from '../components/BrowseMenu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { getPromos, loadRecommendedRestaurants } from '../middleware'
import { connect } from "react-redux"
import BottomBar from "../components/AbsoluteComponents"
import Divider from '@material-ui/core/Divider';
import dishes from '../components/Dishes'
import Displaydish from '../components/DisplayDish'

function MenuPage(props) {
    const {
        _load_recommended_restaurants,
        _get_promos,

    } = props
    const history = useHistory()
    const handleChange = () => {
        history.push("/home")
    }

    useEffect(() => {
        _load_recommended_restaurants()
        _get_promos("11")
    }, [])
    const windowWidth = window.innerWidth;
    const ids=dishes.map((dish) => ({name: dish.categoryName, href: dish.id, ndish: dish.data.length}))
    // console.log(Dishes);

    const menuNavBarStyle = {
        width: "100vw",
        borderBottom: "1px solid grey",
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
        background: 'white',
        height: '6.5vh'
    }
    return (
        <div style={{width: '100%'}} id="container">
            <div
                style={menuNavBarStyle}
            >
                <div style={{ margin: '15px', display: 'flex' }}>
                    <div style={{cursor: 'pointer'}}>
                        <ArrowBackIosIcon onClick={handleChange} />
                    </div>
                    <div>
                        <div style={{ color: "#ff5656" }}>
                            Menu 
                        </div>
                        <div style={{ fontSize: '10px', marginTop: '5px' }}>
                            Grey Orange - Lavel Road
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '6.5vh'}}>
                <Offers />
            </div>
            

            <div style={{ position: 'absolute', zIndex: 10, width: '100%', }} > <CategoriesMenu /></div>
            <Items />
            {dishes.map((item, index) => {
                return( 
                    <div>                                                       
                        <Displaydish key={item.categoryName} obj = {JSON.parse(JSON.stringify(item))} index = {index}/>
                        <Divider style={{ height: '10px', width: "100%" }} />             
                    </div>
                )
            })}
             <BottomBar /> 
            <BrowseMenu ids={ids}/>
        </div>
    )

}
const mapStateToProps = (state) => ({
    menu: state.menu,
})

const mapDispatchToProps = (dispatch) => ({
    _load_recommended_restaurants: () => dispatch(loadRecommendedRestaurants()),
    _get_promos: (id) => dispatch(getPromos(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)    // redux
