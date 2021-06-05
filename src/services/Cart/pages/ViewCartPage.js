import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import AbsoluteItems from '../components/AbsoluteComponents'
import CartItems from '../components/CartItems';

export const ViewCartPage = () => {
    const history = useHistory()
    const height = window.innerHeight;

    const cartNavStyle = {
        width: '100vw',
        borderBottom: "1px solid grey",
        backgroundColor: '#ececec',
        height: '50px',
        position: 'fixed',
        top: '0',
        left: '0'
    }

    return (
        <div >
            <div
                style={cartNavStyle}
            >
                <div style={{ display: 'flex', }}>
                    <div style={{ marginTop: '15px', marginLeft: '10px' }}>
                        <ArrowBackIosIcon style={{ color: '#6d6d6d' }} onClick={() => history.hasOwnProperty("back") ? history.back() : history.push("/menu")} />
                    </div>
                    <div>
                        <div style={{ color: "#6d6d6d", marginTop: '20px', fontSize: '20px' }}>
                            Cart
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '50px',}}>
                <CartItems />
            </div>
            
            <div style={{
                width: "100%",
                height: "45px",
                overflow: "hidden",
                position: "sticky",
                bottom: 0,
                backgroundColor: "#32c282",
                marginTop: height * 0.8 + 'px',
            }}>

                <AbsoluteItems />

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCartPage)
