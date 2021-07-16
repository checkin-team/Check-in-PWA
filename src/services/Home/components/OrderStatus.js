import React from "react"
import OrderFirstImage from '../../../assets/home/noun_shopping_basket.png'
import OrderSecondImage from '../../../assets/home/noun_cooking.png'
import OrderThirdImage from '../../../assets/home/noun_waiter.png'
import RoundedButton from '../../../shared/components/Button/Rounded'
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router"
import { PinDropSharp } from "@material-ui/icons";
import {_GET_ORDER_STATUS} from '../middleware/index';
import {connect} from 'react-redux'

const useStyles= makeStyles(theme=>({
    container:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "130px",
        backgroundColor: "#ffefef",
        [theme.breakpoints.down('sm')]:{
            padding: '10px',
            height: "18vh"
            }
    },
    imageContainer:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "70px",
        backgroundColor: "white",
        marginLeft: '30px',
        borderRadius: "6px", 
        [theme.breakpoints.down('sm')]:{
        marginLeft: '0',

        }

    },
    buttonContainer:{
        display: "flex",
        flexDirection: "column",
        padding: "0",
        width: "100%",
        [theme.breakpoints.down('sm')]:{
            marginTop: '10px',
    
            }
    },

}));


function OrderStatus(props) {
    const classes = useStyles();
    const history= useHistory();
    const handleClick=()=>{
        history.push('/order');
    }
    const [inProgress,setInProgress]= React.useState([]);
    const [delivered,setDelivered] = React.useState([]);
    const [newOrder,setNewOrder]= React.useState([]);
    React.useEffect(()=>{
        props._ORDER_STATUS();
    },[])

    React.useEffect(()=>{
        if(Array.isArray(props.orderNumbers)){
            let newArr = props.orderNumbers?.filter(i=>i.status==1)
            let inArr= props.orderNumbers?.filter(i=>i.status==5);
            let deliver= props.orderNumbers?.filter(i=>i.status==10);
            setInProgress([...inArr]);
            setDelivered([...deliver]);
            setNewOrder([...newArr]);
        }
    },[props.orderNumbers])

    

    return (<>
        <Grid container spacing={0}>
            <Grid item container lg={12} md={12} sm={12} xs={12} className={classes.container} spacing={0}>
                <Grid item lg={5} md={5} sm={7} xs={7} className={classes.imageContainer} >
                <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderFirstImage} height="32px" style={{marginTop: '5px'}}/>
                        <p style={{ marginLeft: "2px", marginTop: "5px", color: '#6d6d6d', fontSize: '10px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >

                            </span>
                                {newOrder.length}&nbsp;New
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderSecondImage} height="32px"  style={{marginTop: '5px'}} />
                        <p style={{ marginLeft: "2px", marginTop: "5px", color: '#6d6d6d', fontSize: '10px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                {inProgress.length}
                                </span>
                                &nbsp;In Progress
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderThirdImage} height="32px"  style={{marginTop: '5px'}} />
                        <p style={{ fontSize: 10, marginLeft: "4px", marginTop: "5px", color: '#6d6d6d', fontSize: '10px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                {delivered.length}
                                </span>
                                &nbsp;Delivered

                            </p>
                    </Grid>
                    
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5} className={classes.buttonContainer}>
                
                    <div style={{ fontSize: "14px", color: "#6d6d6d", fontWeight: 800, textAlign: "center" }}>Order Status</div>
                    <div >
                        <RoundedButton
                            size={"small"}
                            style={{width: "73%",marginLeft: '15%'}}
                            onClick={handleClick}
                        >
                            <span
                                style={{ fontSize: "14px",fontWeight: 'bold' }}
                            >
                                View Order
                                </span>
                        </RoundedButton>
                    </div>
                
                </Grid>
            </Grid>
        </Grid>
    </>)
}

const mapStateToProps = state => ({
    orderNumbers: state.home.orderNumbers
});

const mapDispatchToProps = dispatch => ({
    _ORDER_STATUS: () => dispatch(_GET_ORDER_STATUS()),
});

export default connect(mapStateToProps,mapDispatchToProps)(OrderStatus);