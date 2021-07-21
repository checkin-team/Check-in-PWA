import React from 'react'
import {Card,Grid,makeStyles,Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OrderCard from "../components/OrderCard";
import { useHistory } from 'react-router';
import {connect} from 'react-redux';
import {SEND_ORDER_STATUS_REQ} from '../middleware/index';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles= makeStyles(theme=>({
    container:{
        padding: "1rem 4rem",
        [theme.breakpoints.down('sm')]:{
            padding: '0rem 2rem',
        }
    },
    heading:{
        color: "#6d6d6d",
        [theme.breakpoints.down('sm')]:{
            fontSize: '2rem',
            marginTop: '1.125rem'
        }
    }
}))

const ViewOrders = (props) => {
    
    // const orderArr= [
    // {name:"Farmhouse Pizza",quantity:"3F",status:"pending",time: "3 Minutes ago",addOn:[{heading:"Add On",content:"Extra Cheese"},{heading:"Pizza Crust",content: "Plain Bread"}],request:{heading:"Your Request",content:"Spread the cheese on the crust evenly"}},
    // {name:"Butter Chicken",quantity:"1F",status:"progress",time: "3 Minutes ago",request:{heading:"Your Request",content:"Spread the cheese on the crust evenly"}},
    // {name:"Garlic Nan",quantity:"1F",status:"cancelled",time: "3 Minutes ago"},
    // {name:"Garlic Nan",quantity:"1F",status:"delivered",time: "3 Minutes ago"},
    // ];
    const [orderArr,setOrderArr]= React.useState([]);
    React.useEffect(()=>{
        props._get_order_status();
        console.log('[ViewOrders.js]orderStatus Data: ',props.orderStatus);
    },[])

    // React.useEffect(()=>{
    // //    if(Array.isArray(props.orderStatus)){
    // //        setOrderArr([...props.orderStatus])
    // // }else{
        
    //     //    }
    //     // setOrderArr([]);
    //     // setOrderArr([...props.orderStatus]);
    
    // },[props.orderStatus])

    const history= useHistory();
    const handleBackClick=()=>{
        history.push('/home')
    }
    const {orderStatus} = props
    const classes = useStyles();
    if(orderStatus.isLoading===true)
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
    <CircularProgress style={{color:"#ff5656"}} size={50} />
    </div>
   
    return (
        <div>
            <Grid container>
                <Grid className={classes.container} item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.heading} variant="h3"><ArrowBackIosIcon onClick={handleBackClick} style={{cursor:"pointer"}} /> Order Status</Typography>
                </Grid>
                <Grid container>
                    <Grid className={classes.container} item lg={12} md={12} sm={12} xs={12}>
                    {props.orderStatus.data.length<1? (<div style={{textAlign:"center",height:"90vh",alignContent:"center",justifyContent:"center"}}><span>No orders yet</span> </div>) : props.orderStatus.data.map((item,index)=><OrderCard key={index} data={item} />)}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
    orderStatus: state.order.orderStatus
})

const mapDispatchToProps = dispatch => ({
    _get_order_status: (id) => dispatch(SEND_ORDER_STATUS_REQ(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(ViewOrders);
