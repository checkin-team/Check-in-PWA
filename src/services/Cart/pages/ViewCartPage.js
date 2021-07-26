import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import AbsoluteItems from '../components/AbsoluteComponents'
import CartItems from '../components/CartItems';
import complete from "../../../assets/order/complete.gif"
import { makeStyles,Typography } from '@material-ui/core';
import BackButton from '../../../assets/RoomServices/BackButton.svg';


export const ViewCartPage = () => {
    const history = useHistory()
    const height = window.innerHeight;
    const [remarkArr,setRemarkArr]= React.useState([])

    
    React.useEffect(() => {
        console.log(history);
    })

    // console.log(completeImage)
    const cartNavStyle = {
        width: '100vw',
        borderBottom: "1px solid lightgrey",
        boxShadow: '0px 1.5px 1px 0px lightgrey',
        backgroundColor: '#ececec',
        height: '50px',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex:"20",
    }

    const navBarStyle = {
        paddingTop: "2.3vh",
        paddingLeft: "4.78vw",
        paddingRight: '6.25vw',
        paddingBottom: '1vh',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
        background: 'white',
        minWidth: '100vw'
    }

    const backButtonStyle = {
        paddingRight : "3.28vw",
        width: "3.75vw",
        height: "3.7vh",
        display : "inline"
    }

    const headingStyle = {
        display: 'inline',
        fontSize : "3.7vh",
        verticalAlign : "bottom",
        color: '#6d6d6d',
        fontFamily: "JosefinSans-Regular"
    }
    return (
        <div >
            
            <div
                // style={cartNavStyle}
            >
                {/* <div style={{ display: 'flex', }}>
                    <div style={{ marginTop: '15px', marginLeft: '10px' }}>
                        <ArrowBackIosIcon style={{ color: '#6d6d6d',cursor:"pointer" }} onClick={() => history.hasOwnProperty("goBack") ? history.goBack() : history.push("/menu")} />
                    </div>
                    <div>
                        <div style={{ color: "#6d6d6d", marginTop: '20px', fontSize: '20px' }}>
                            Cart
                        </div>
                    </div>
                </div> */}
                <div style={navBarStyle}>
                    <img  onClick={() => history.hasOwnProperty("goBack") ? history.goBack() : history.push("/menu")} src={BackButton} alt="Back Button" style={backButtonStyle} />
                    <p style={headingStyle}>Cart</p>
                </div>
                
            </div>
            <div style={{marginTop: '50px',}}>
                <CartItems remarkArr={remarkArr} setRemarkArr={setRemarkArr}/>
            </div>
            
            <div style={{
                width: "100%",
                height: "5.5vh",
                overflow: "hidden",
                position: "sticky",
                bottom: 0,
                backgroundColor: "#32c282",
                marginTop: height * 0.8 + 'px',
            }}>

                <AbsoluteItems remarkArr={remarkArr}/>

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
