import React from 'react'
import {Card,Grid,makeStyles,Typography,Chip,Divider, useMediaQuery} from "@material-ui/core";
import {useState,useEffect } from 'react';

const useStyles=makeStyles(theme=>({
    card:{
        padding: "1rem 2rem",
        borderRadius: "1rem",
        border: "1px solid rgb(140,140,140,0.1)",
        boxShadow: "0 0 0.625vw 0px rgb(140,140,140,0.5)",
        [theme.breakpoints.down('sm')]:{
            padding: "1rem",
        },
        margin: "2rem 5vw",
        
    },
    name:{
        color: "#6d6d6d",
        fontWeight: "500!important",
    },
    chip:{
        fontFamily: "Arial",
        fontSize: "0.6rem",
        padding: '0',
        color: "#fff",
        backgroundColor: "#6d6d6d",
    },
    pending:{
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#e88e45",
        fontSize: '0.7rem',
        height: '6vw',
        marginTop: '1.1vw',
    },
    progress:{
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#0295AA",
        fontSize: '0.7rem'
    },
    delivered:{
        backgroundColor: "#32c282",
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#32c282",
        fontSize: '0.7rem'
    },
    cancelled:{
        backgroundColor: "#32c282",
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#FF5656",
        fontSize: '0.7rem'
    },
    heading:{
        color:"#ff5656",
    },
    content:{
        color: "#6d6d6d",
    },
    time:{
        color:"#bebebe",
        fontSize: "0.8rem !important",
        fontWeight: "600 !important",
        margin: "1rem 0 0 0"
    },
    addOnContainer:{
        margin: "1rem 0",
        width:"50%",  
        display: "inline-block",
     
        //     width: "40%",
    //     display: "inline-block",
    },
    divider:{
        margin: "1rem 0",
    },
    name200:{
        color: "#6d6d6d",
        fontWeight: "600!important",
        fontSize: "0.8rem",
    },
    oddAddOnContainer:{
        margin: "1rem 0",
        // textAlign: "right",
        width:"50%",  
        display: "inline-block",
        textAlign:"right"
        // justifyContent: "flex-end"      
    },
    requestContainer:{
        margin: "1rem 0 0 0",
    }
}))

const OrderCard = ({data}) => {
    const classes = useStyles();
    const isActive = useMediaQuery('(max-width: 330px');
    const isActive200 = useMediaQuery('(max-width:200px)');

    const event={
       0: "STATUS_NONE",  
       1 : "Pending",  
       5: "In Progress",
       6: "STATUS_COOKED", 
       10: "Delivered",
       9: "Cancelled",
    }
    const [orderTime,setOrderTime]= useState();

    const calcTime=()=>{
        const current= new Date().getTime();
        const order = new Date(data.ordered).getTime();
        let diff = (current-order)/1000;
        diff/=60;
        setOrderTime(Math.abs(Math.round(diff)));
    }
    var interval= setInterval(()=>{
        calcTime();
    },60000)

    useEffect(()=>{
       return clearInterval(interval) 
    },[])
    return (
        <>
            <Card variant="outlined" className={classes.card}>
                <Grid container>
                    <Grid item lg={10} md={10} sm={10} xs={8}>
                        <Typography className={isActive200?classes.name200:classes.name} variant="h6">{data.item.name} &nbsp; <Chip className={classes.chip} size="small"  label={`QTY: ${data.quantity}`} /></Typography>
                    </Grid>
                    <Grid style={{display:"flex",justifyContent:"flex-end"}} item lg={2} md={2} sm={2} xs={isActive?12:4}>
                        {data.status===1?<Chip className={classes.pending} size="small" label={event[data.status]}></Chip>:null}
                        {data.status===5?<Chip className={classes.progress} label={event[data.status]}></Chip>:null}
                        {data.status===10?<Chip className={classes.delivered} label={event[data.status]}></Chip>:null}
                        {data.status===9?<Chip className={classes.cancelled} label={event[data.status]}></Chip>:null}
                    </Grid>
                </Grid>
                    {data.customizations.length>=1?<Grid Container>
                        {data.customizations.map((item,index)=>{ if(index%2===0)
                        {return (<Grid className={classes.addOnContainer} item lg={6} md={6} sm={12} xs={12}>
                            
                            <Typography className={classes.heading} variant="subtitle2">{item.group}</Typography>
                            <Typography className={classes.content} variant="subtitle1">{item.name}</Typography>

                        </Grid>)}
                        else{
                            return (<Grid className={classes.oddAddOnContainer} item lg={6} md={6} sm={12} xs={12}>
                            {/* <div> */}
                            <Typography className={classes.heading} variant="subtitle2">{item.group}</Typography>
                            <Typography className={classes.content} variant="subtitle1">{item.name}</Typography>
                            {/* </div> */}
                            </Grid>);
                        }
                        })}
                        <Divider className={classes.divider}></Divider>
                    </Grid>:null}

                        

                    {data.remarks?<Grid container className={classes.requestContainer}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Typography className={classes.heading} variant="subtitle2">Remarks</Typography>
                            <Typography className={classes.content} variant="subtitle1">{data.remarks}</Typography>
                        </Grid>
                    </Grid>:null}
                    <Grid container>
                        <Grid style={{display:"flex",justifyContent:"flex-end"}} item lg={12} md={12} sm={12} xs={12}>
                            <Typography className={classes.time} variant="subtitle2">{orderTime} minutes Before</Typography>
                        </Grid>
                    </Grid>
            </Card>
        </>
    )
}
export default OrderCard