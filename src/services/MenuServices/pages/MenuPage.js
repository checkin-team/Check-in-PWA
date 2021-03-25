import React, { useEffect } from 'react'
import AbsoluteItems from '../components/AbsoluteComponents'
import Offers from '../components/Offers'
import Recommended from '../components/Recommended'
import CategoriesMenu from '../components/CategoriesMenu'
import Items from '../components/FoodCategories'
import BrowseMenu from '../components/BrowseMenu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { getPromos, loadRecommendedRestaurants } from '../middleware'
import { connect } from "react-redux"

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
        _get_promos()
    }, [])
    return (
        <div>
            <div
                style={{ width: '100%', borderBottom: "1px solid grey" }}
            >
                <div style={{ margin: '15px', display: 'flex' }}>
                    <div>  <ArrowBackIosIcon onClick={handleChange} /></div>
                    <div><div style={{ color: "#ff5656" }}>Menu</div>
                        <div style={{ fontSize: '10px', marginTop: '5px   ' }}>Grey Orange - Lavel Road</div></div></div>
            </div>
            <Offers />

            <div style={{ position: 'absolute', zIndex: 10, width: '100%', }} > <CategoriesMenu /></div>
            <Items />
            <Recommended />
            {/* <ChatWithUs /> */}
            <BrowseMenu />
            <div style={{
                width: "100%",
                height: "45px",
                overflow: "hidden",
                position: "fixed",
                bottom: 0,
                backgroundColor: "#32c282"
            }}>
                <AbsoluteItems />

            </div>
        </div>
    )

}
const mapStateToProps = (state) => ({
    menu: state.menu
})

const mapDispatchToProps = (dispatch) => ({
    _load_recommended_restaurants: () => dispatch(loadRecommendedRestaurants()),
    _get_promos: () => dispatch(getPromos()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)