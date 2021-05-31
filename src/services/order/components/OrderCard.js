import React from 'react'
import {Card,Grid,makeStyles,Typography,Chip,Divider, useMediaQuery} from "@material-ui/core";

const useStyles=makeStyles(theme=>({
    card:{
        padding: "1rem 2rem",
        borderRadius: "1rem",
        boxShadow: "1px 1px 5px #bebebe",
        [theme.breakpoints.down('sm')]:{
            padding: "1rem",
        },
        margin: "2rem 0"
    },
    name:{
        color: "#6d6d6d",
        fontWeight: "600!important",
    },
    chip:{
        fontFamily: "Arial",
        fontSize:"0.8rem",
        color: "#fff",
        backgroundColor:"#6d6d6d",
    },
    pending:{
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#e88e45",

    },
    progress:{
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#0295AA",

    },
    delivered:{
        backgroundColor: "#32c282",
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#32c282",

    },
    cancelled:{
        backgroundColor: "#32c282",
        fontWeight:"600 !important",
        textTransform: "uppercase",
        color: "#fff",
        backgroundColor: "#FF5656",
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

    return (
        <>
            <Card variant="outlined" className={classes.card}>
                <Grid container>
                    <Grid item lg={10} md={10} sm={10} xs={8}>
                        <Typography className={isActive200?classes.name200:classes.name} variant="h6">{data.name} &nbsp; <Chip className={classes.chip}  label={`QTY: ${data.quantity}`} /></Typography>
                    </Grid>
                    <Grid style={{display:"flex",justifyContent:"flex-end"}} item lg={2} md={2} sm={2} xs={isActive?12:4}>
                        {data.status==="pending"?<Chip className={classes.pending} label={data.status}></Chip>:null}
                        {data.status==="progress"?<Chip className={classes.progress} label={data.status}></Chip>:null}
                        {data.status==="delivered"?<Chip className={classes.delivered} label={data.status}></Chip>:null}
                        {data.status==="cancelled"?<Chip className={classes.cancelled} label={data.status}></Chip>:null}
                    </Grid>
                </Grid>
                    {data.addOn?<Grid Container>
                        {data.addOn.map((item,index)=>{ if(index%2===0)
                        {return (<Grid className={classes.addOnContainer} item lg={6} md={6} sm={12} xs={12}>
                            
                            <Typography className={classes.heading} variant="subtitle2">{item.heading}</Typography>
                            <Typography className={classes.content} variant="subtitle1">{item.content}</Typography>

                        </Grid>)}
                        else{
                            return (<Grid className={classes.oddAddOnContainer} item lg={6} md={6} sm={12} xs={12}>
                            {/* <div> */}
                            <Typography className={classes.heading} variant="subtitle2">{item.heading}</Typography>
                            <Typography className={classes.content} variant="subtitle1">{item.content}</Typography>
                            {/* </div> */}
                            </Grid>);
                        }
                        })}
                        <Divider className={classes.divider}></Divider>
                    </Grid>:null}

                        

                    {data.request?<Grid container className={classes.requestContainer}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Typography className={classes.heading} variant="subtitle2">{data.request.heading}</Typography>
                            <Typography className={classes.content} variant="subtitle1">{data.request.content}</Typography>
                        </Grid>
                    </Grid>:null}
                    <Grid container>
                        <Grid style={{display:"flex",justifyContent:"flex-end"}} item lg={12} md={12} sm={12} xs={12}>
                            <Typography className={classes.time} variant="subtitle2">{data.time}</Typography>
                        </Grid>
                    </Grid>
            </Card>
        </>
    )
}
export default OrderCard