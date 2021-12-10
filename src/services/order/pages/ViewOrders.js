import React from 'react'
import {Card,Grid,makeStyles,Typography} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OrderCard from "../components/OrderCard";
const useStyles= makeStyles(theme=>({
    container:{
        padding: "1rem 4rem",
        [theme.breakpoints.down('sm')]:{
            padding: '2rem',
        }
    },
    heading:{
        color: "#6d6d6d",
        [theme.breakpoints.down('sm')]:{
            fontSize: '2rem',
        }
    }
}))

const ViewOrders = () => {
    
    const orderArr= [{name:"Farmhouse Pizza",quantity:"3F",status:"pending",time: "3 Minutes ago",addOn:[{heading:"Add On",content:"Extra Cheese"},{heading:"Pizza Crust",content: "Plain Bread"}],request:{heading:"Your Request",content:"Spread the cheese on the crust evenly"}}
    ,{name:"Butter Chicken",quantity:"1F",status:"progress",time: "3 Minutes ago",request:{heading:"Your Request",content:"Spread the cheese on the crust evenly"}},
{name:"Garlic Nan",quantity:"1F",status:"cancelled",time: "3 Minutes ago"},
{name:"Garlic Nan",quantity:"1F",status:"delivered",time: "3 Minutes ago"},
];

    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Grid className={classes.container} item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.heading} variant="h3"><ArrowBackIosIcon /> Order Status</Typography>
                </Grid>
                <Grid container>
                    <Grid className={classes.container} item lg={12} md={12} sm={12} xs={12}>
                    {orderArr.map((item,index)=><OrderCard key={index} data={item} />)}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ViewOrders
