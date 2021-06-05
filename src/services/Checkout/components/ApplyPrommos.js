import React from 'react'
import { connect } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import SettleBill from '../components/SettleBill'
import Promos from '../components/Promos'
import GrandTotal from '../components/GrandTotal';
import Button from '../.././../shared/components/Button/Basic'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import arrow5 from '../../../assets/home/arrow5.png';
import line5 from '../../../assets/home/line5.png'
import more from '../../../assets/home/more.png'
import promo5 from '../../../assets/home/promo5.png'
import Offers from '../../MenuServices/components/Offers'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Percentage from '../../../assets/menu/percentageicon.svg';
import parser from 'html-react-parser'
import { blue } from '@material-ui/core/colors';

import CategoriesMore from '../../Checkout/components/CategoriesMore';


const ApplyPrommos = (props) => {

    const handleApply = () => {
        history.push("/settlebill")
        // console.log("sdfg")

    }
    const handleMore = () => {
        console.log("more")

    }

    // console.log(props)
    const { menu } = props;
    const promos = menu.promos.data;
    //  console.log(Promos)
    const history = useHistory()
    let windowWidth = window.innerWidth;


    //  Offers By Ronit

    const offers = [
        {offerFrom: 'Check-In', desc: 'Get 50% Off', condition: 'Above Orders of 150'},
        {offerFrom: 'Check-In', desc: 'Get 40% Off', condition: 'Above Orders of 100'},
        {offerFrom: 'PayPal', desc: 'Get 20% Off', condition: 'Above Orders of 500'},
        {offerFrom: 'SBI', desc: 'Get 20% Off with SBI Credit Cards', condition: 'Above Orders of 450'},
        {offerFrom: 'ICICI BANK', desc: 'Flat 10% Off', condition: 'Above Orders of 200'},
        {offerFrom: 'ICICI BANK', desc: 'Get 30% Off', condition: 'Above Orders of 1000'},
    ];

    const offerLogo = {
        height : '8vw',
        borderRadius : '25%',
        marginLeft: '2vw'
    }

    const offerFromStyle = {
        color: '#ff5656',
        fontSize: '4.5vw',
        fontWeight: 800,
        verticalAlign: 'top'
    }

    const offerDescStyle = {
        color: 'rgb(60,60,60)',
        fontSize: '3.5vw',
        marginLeft: '2vw',
        marginTop: '0.5vh',
        marginBottom: '0',
    }

    const offerConditionStyle = {
        color: '#6d6d6d',
        fontSize: '3vw',
        marginLeft: '2vw',
        marginTop: '0.4vh',
        marginBottom: '0.5vh'
    }

    const offerButtonStyle = {
        color: 'white',
        background: '#0295aa',
        width: 'fit-content',
        padding: '1vh 1.5vw',
        fontSize: '3vw',
        marginLeft: '2vw',
        marginTop: '1vh',
        marginBottom: '1vh',
        borderRadius: '5%',
        border: '1px solid #0295aa',
    }

    const promoSearchStyle = {
        width: '80vw',
        height: '2.5vh',
        margin: '0 1vw',
        border: '1px solid #cdcdcd',
        borderRadius: '13px',
        fontSize: '16px',
        ":focus": {
            outline: 'none'
        },
        fontWeight: '500',
        fontFamily: '"Josefin Sans", sans-serif',
        padding: '8px',
        paddingLeft: '10px'
    }


    return (
        <div>
            <div style={{ height: '130px', width: '100%', backgroundColor: '#ececec' }}>
                <div >
                    <div style={{position: 'fixed',height: '4vh',paddingTop: '0.65vh' ,top: '0', left : '0', width: '100vw', zIndex: '100', background: '#ececec', paddingBottom: '2vh'}}>
                    <ArrowBackIosIcon style={{ color: '#6d6d6d', margin: '12px 0px -5px 12px' }}
                        onClick={() => history.hasOwnProperty("back") ? history.back() : history.push("/settlebill")} />
                    <span style={{ color: "#6d6d6d", fontSize: '20px', marginTop: '15px', }}>
                        Apply Coupons
                    </span></div>
    {/* Input for searching promo codes
                    <Paper
                        elevation={0}
                        component="form"
                        style={{
                            borderRadius: '10px',
                            margin: '10px',
                            height: '43px',
                            marginTop: '10vh',
                            //marginRight: '250px',
                            border: "1px solid #cdcdcd",

                        }}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "-3px"
                        }}
                        >
                            <InputBase
                                placeholder="Search for promo code"
                                style={{ marginLeft: '8px', marginTop: '5px' }}
                            />
                            <IconButton aria-label="search" style={{ marginLeft: windowWidth * 0.32 + 'px' }} >
                                <img src={arrow5} style={{ color: '#ff5656' }} width="20" height="20" viewBox="0 0 30 30"></img>

                            </IconButton>

                        </div>
                    </Paper> */}
                <div style={{width: '100vw', marginTop: '5.5vh', background : 'rgb(236, 236, 236)',paddingTop: '4vh'}}>
                    <input type="text" style={promoSearchStyle} placeholder="Search for Promo code" />
                </div>


                </div>
                <div style={{ color: "#6d6d6d", fontSize: '15px', margin: '15px 0px 6vh 15px'}}>
                    Available Promos
                </div>

                <div>
                    <br></br>
                    {/*promos.map(res =>
                        <div >
                            <img src={promo5} style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', marginLeft: '10px', margin: '12px 0px -10px 12px' }} width="30" height="30"></img>
                            <span style={{ color: '#ff5656', fontSize: '12px', marginLeft: '5px', fontWeight: 800 }} onClick={() => history.push("/settlebill")}>CHECKOUT</span>

                            <span style={{ marginLeft: '200px', color: '#ff5656', fontSize: '15px', fontWeight: 800 }} onClick={handleApply}>Apply</span>
                            <p style={{ display: 'flex', marginBottom: '0', marginLeft: '6px', fontSize: '14px', color: '#6d6d6d' }}>

                                &nbsp;Get&nbsp;<div style={{ whiteSpace: 'pre-line', fontSize: '11px' }} > {parser(res.name)}</div>
                            </p>

                            <p style={{ color: '#bebebe', marginTop: '0px', marginLeft: '6px', fontSize: '10px', marginLeft: '10px', marginTop: '1px' }}>Applicable for orders above  99 </p>
                            <img src={more} style={{ width: '50px', marginLeft: '10px', marginBottom: '5px' }} onclick={handleMore}></img>

                            <img src={line5} style={{ marginLeft: '10px', width: '350px' }}></img>
                        </div>
                    )*/}
                    {offers.map(offer => (
                        <div style={{marginTop: '2vh'}}>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <img src={promo5} style={offerLogo}/>
                                    <span style={offerFromStyle}>&nbsp;&nbsp;{offer.offerFrom}</span>
                                </div>
                                <span style={{marginRight: '4vw', color: '#ff5656', fontWeight: '900', verticalAlign : 'bottom', marginTop: '5vw', fontSize: '5vw'}}>Apply</span>
                            </div>
                            <p style={offerDescStyle}>{offer.desc}</p>
                            <p style={offerConditionStyle}>{offer.condition}</p>
                            <p style={offerButtonStyle}>More Details</p>
                            <img src={line5} style={{ marginLeft: '2vw', width: '94vw', marginRight: '5vw' }}></img>
                        </div>
                    ))
                    }



                </div>

                <div className="text-center" style={{ bottom: 0, position: 'fixed', width: '100%', marginRight: '4vw', zIndex: '100', background: 'white'}}><Button fullWidth style={{ backgroundColor: '#32c282', marginTop: '2vh', color: '#fff', width: '90%', marginBottom: '3vh' }}>PAY</Button></div>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => ({
    menu: state.menu,
})


const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyPrommos)
