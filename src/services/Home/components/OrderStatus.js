import React from "react"
import OrderFirstImage from '../../../assets/home/noun_shopping_basket.png'
import OrderSecondImage from '../../../assets/home/noun_cooking.png'
import OrderThirdImage from '../../../assets/home/noun_waiter.png'
import RoundedButton from '../../../shared/components/Button/Rounded'
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



export default function OrderStatus() {

    return (
        <Grid style={{ height: "130px", backgroundColor: "#ffefef", marginTop: "15px" }} container spacing={3}>
            <Grid style={{ margin: "10px", marginLeft: '30px', backgroundColor: "white", borderRadius: "6px", height: "70px", marginTop: "30px" }} item xs={7}>
                <Grid container spacing={1}>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderFirstImage} height="16px" />
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderSecondImage} height="16px" />
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <img src={OrderThirdImage} height="18px" />
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <p style={{ fontSize: 10, marginLeft: "6px", marginTop: "0", color: '#6d6d6d', fontSize: '9px', fontWeight: 600 }}>

                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >

                            </span>
                                0&nbsp;New
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <p style={{ fontSize: 9, marginLeft: "6px", marginTop: "0", color: '#6d6d6d', fontSize: '9px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                2
                                </span>
                                &nbsp;In Progress
                            </p>
                    </Grid>
                    <Grid style={{ textAlign: "center" }} item xs={4}>
                        <p style={{ fontSize: 10, marginLeft: "6px", marginTop: "0", color: '#6d6d6d', fontSize: '8px', fontWeight: 600 }}>
                            <span
                                style={{ color: "red", fontWeight: 600 }}
                            >
                                2
                                </span>
                                &nbsp;Delivered

                            </p>
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ marginTop: "30px", marginLeft: '-15px' }} item xs={4}>
                <div>
                    <div style={{ fontSize: 13, color: "#6d6d6d", fontWeight: 800, textAlign: "center" }}>Order Status</div>
                    <div >
                        <RoundedButton
                            size={"small"}
                            fullWidth
                        >
                            <span
                                style={{ fontSize: "14px" }}
                            >
                                View Items
                                </span>
                        </RoundedButton>
                    </div>
                </div>
            </Grid>
        </Grid>

    )
}