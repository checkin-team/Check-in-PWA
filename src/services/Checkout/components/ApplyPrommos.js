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
import { makeStyles } from '@material-ui/core';
import { getPromos } from '../../MenuServices/middleware/index';
import {applyPromo} from '../middleware/index';

const useStyles = makeStyles({
    toggleDiv:{
        display:"none"
    },
    
})

const ApplyPrommos = (props) => {

    React.useEffect(() => {
        props._get_promos()
    }, [])

    
    
    const classes = useStyles();
    // console.log(props)
    const { menu } = props;
    const promos = menu.promos.data;
    //  console.log(Promos)
    const history = useHistory()
    let windowWidth = window.innerWidth;


    const offerLogo = {
        height : '8vw',
        borderRadius : '25%',
        // marginLeft: '2vw'
    }

    const offerFromStyle = {
        color: '#ff5656',
        fontSize: '4vw',
        fontWeight: 600,
        marginRight:"5vw",
        fontFamily:"Arial",
        textTransform:"uppercase",
        // verticalAlign: 'top'
    }

    const offerDescStyle = {
        color: '#6d6d6d',
        fontSize: '3.5vw',
        // marginLeft: '2vw',
        marginTop: '1.5vh',
        marginBottom: '0',
    }

    const offerConditionStyle = {
        color: '#bebebe',
        fontSize: '3.5vw',
        // marginLeft: '2vw',
        marginTop: '0.4vh',
        marginBottom: '0.5vh'
    }

    const offerButtonStyle = {
        color: 'white',
        background: '#0295aa',
        width: 'fit-content',
        padding: '0.5vh 1.5vw',
        fontSize: '3vw',
        // marginLeft: '2vw',
        marginTop: '1vh',
        marginBottom: '1vh',
        borderRadius: '5%',
        border: '1px solid #0295aa',
    }

    const promoSearchStyle = {
        width: '89vw',
        height: '2.5vh',
        margin: '0 3vw',
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

    const handleClick=(index)=>{
        const element = document.getElementById(`${index}toggle`);
        const bttn= document.getElementById(`${index}button`)
        element.style.display="block";
        bttn.style.display="none";
    }

    const applyClicked = (code) => {
        props._applyPromo(code);
        history.push('/settlebill')
    }

    return (
        <div>
            <div style={{ height: '130px', width: '100%', backgroundColor: '#ececec' }}>
                <div >
                    <div style={{position: 'fixed',height: '4vh',paddingTop: '0.65vh' ,top: '0', left : '0', width: '100vw', zIndex: '100', background: '#ececec', paddingBottom: '2vh'}}>
                    <ArrowBackIosIcon style={{ color: '#6d6d6d', margin: '12px 0px -5px 3vw' }}
                        onClick={() => history.hasOwnProperty("goBack") ? history.goBack() : history.push("/settlebill")} />
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
                <div style={{width: '100vw',display:"flex",alignItems:"center",marginTop: '5.5vh', background : 'rgb(236, 236, 236)',paddingTop: '4vh'}}>
                    <input type="text" style={promoSearchStyle} placeholder="Search for Promo code" />
                   <Typography variant="span" style={{position:"absolute",right:"5vw",color:"#ff5656"}}>Apply</Typography>
                </div>


                </div>
                <div style={{ color: "#6d6d6d", fontSize: '15px', margin: '15px 0px 6vh 3vw'}}>
                    Available Promo
                </div>

                <div>
                    <br></br>
                    {promos.map((offer,index) => (
                        <div style={{marginTop: '2vh',marginLeft:"3vw"}}>
                            <div style={{display: 'flex', justifyContent: 'space-between',alignItems:"center"}}>
                                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid #bebebe",width:"35vw",height:"8vw",borderRadius:"2vw",padding:"0"}}>
                                    <img src={promo5} style={offerLogo}/>
                                    <span style={offerFromStyle}>&nbsp;&nbsp;{offer.code}</span>
                                </div>
                                <span onClick={() => applyClicked(offer.code)} style={{marginRight: '3vw', color: '#ff5656', fontWeight: '900', verticalAlign : 'bottom',marginRight:"3.4vw",  fontSize: '5vw'}}>Apply</span>
                            </div>
                            <p style={offerDescStyle}>{offer.summary}</p>
                            <p style={offerConditionStyle}>{offer.terms}</p>
                            <p style={offerButtonStyle} id={`${index}button`} onClick={()=>handleClick(index)} className={classes.moreBtn}>More</p>
                            <div id={`${index}toggle`} className={classes.toggleDiv}>
                            <img src={line5} style={{ width: '94vw'}}></img>
                            <p  style={{color:"#bebebe",fontSize:"2.5vw",fontFamily:"Josefin Sans"}}>Terms and Condition</p>
                                <ul style={{color:"#6d6d6d",fontSize:"3.5vw",fontFamily:"Josefin Sans",padding:"0",marginLeft:"3vw"}}>
                                    <li>Statement 1</li>
                                    <li>Statement 2</li>
                                    <li>Statement 3</li>
                                </ul>
                            </div>
                            <img src={line5} style={{ width: '94vw'}}></img>
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


const mapDispatchToProps = dispatch => ({
    _get_promos: () => dispatch(getPromos()),
    _applyPromo: (code)=>dispatch(applyPromo(code))
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyPrommos)
