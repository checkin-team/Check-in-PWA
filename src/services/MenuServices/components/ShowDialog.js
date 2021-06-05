import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import React, { useEffect, useState } from 'react';
import MenuCustomisation from "./MenuCustomisation"
import Dialog from '@material-ui/core/Dialog';
import { addItem, removeItem } from "../../Cart/actions/actionCreator"
import { connect } from 'react-redux'
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom'
import { Fade } from '@material-ui/core';
import  '../../../stylings/displaydishstyle.css'

const useStyles = makeStyles({
    paper: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        overflowX: "hidden",
        marginBottom: "0px",
        borderRadius: "20px 20px 0 0",
        paddingBottom: "10px",
    }
})

{/* <Zoom __remove direction property__ rest is same */}
{/* <Fade __remove direction property__ rest is same*/}

const Transition = React.forwardRef(function Transition(props, ref) {
return <Slide direction="up" ref={ref} timeout={1000} {...props} />;
  });

function ShowDialog(props){
    const classes = useStyles();
    const {image, index, open, onClose:handleClose, onPlus:handleIncrease, onMinus:handleDecrease, openSlides:handleOpenSlides, item} = props;
    console.log(item)
    return(
        <Dialog open={open} onClose={handleClose} classes={{paper: classes.paper}}  variant="outlined" TransitionComponent={Transition} transitionDuration={335} >
            
            <div style={{margin: "14px 15px 5px 15px"}}>
                <img src={image} width="100%" height="30% !important" style={{borderRadius: "20px", boxShadow: "0px 0px 5px 5px #ced4da"}} />
            </div>
            <div style={{ height: '100px', width: "100%", marginLeft: "10px", marginTop: "10px", marginBottom: "10px"}}>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', marginLeft: "5px" }} >
                            <div>  {item.mealtype === "veg" ?
                                (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={Veg} />)
                                : (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                            <div style={{ width: "160px"}} >
                                <div

                                    style={{
                                        height: '18px',
                                         width: (item.type === "MUSTTRY" ? "80px" : "120px"),
                                        marginLeft: '12px',
                                        borderRadius: '10px 4px 4px 10px',
                                        marginBottom: '10px',
                                        backgroundColor: item.type === "MUSTTRY" ? "#ff5656" : "#ffc850"
                                    }}>
                                    <div >
                                        {/*Here since the tags can be anything other than musttry or recommended so we can not just have a ternary operator
                                            here to decide the color of tag. here what we can do is make an object whose property is the tag name and corresponding 
                                                value is the color for the same tag */}

                                        <div><div style={{ height: '2px' }}>{item.type === "MUSTTRY" ?
                                            (<WhatshotIcon style={{ height: '14px', color: '#fff', marginTop: '2px' }} />) : (<ThumbUpIcon style={{ height: '14px', color: '#fff', marginTop: '2px', }} />)}
                                        </div> <span style={{ color: '#fff', marginBottom: '10px', marginLeft: '25px', fontSize: 10 }}>  {item.type}</span> </div>
                                    </div>

                                </div>

                                <div style={{ marginLeft: '-16px' }} onClick={() => handleOpenSlides(item.isCustomised)}>
                                    <div style={{ marginTop: '0', color: '#6d6d6d' }} >{item.name}</div>
                                    <div style={{ marginTop: '10px', color: '#6d6d6d' }}> &#8377;{item.price}</div>
                                    <div style={{color: "grey", opacity: "0.8", fontSize: "0.8em", marginTop: "5px"}}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div style = {{ paddingTop: "95px", marginRight: "20px", paddingLeft: "5px", paddingRight: "5px"}}>
                        <div style={{marginLeft: "70px", marginTop: "-95px"}}>
                                <div style={{
                                    height: '20px',
                                    width: '70px',
                                    backgroundColor: '#ffefef',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: ' 1px solid #ff5656',
                                }}

                                >
                                    {item.cartValue === 0 ?
                                        (
                                            item.isCustomised ?
                                                <MenuCustomisation variants={item.variants} />
                                                :
                                                <div
                                                    style={{ paddingTop: '5px', paddingLeft: '20px', paddingRight: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700, marginRight: "10px" }}
                                                    onClick={() => handleIncrease(index)}
                                                >
                                                    ADD
                                                </div>
                                        )
                                        : (
                                            <div style={{
                                                backgroundColor: '#ff5656', height: '21px',
                                                cursor: 'pointer', width: '71px', borderRadius: '5px'
                                            }}>
                                                <div style={{ display: 'flex', color: '#fff' }}>
                                                    <div ><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} onClick={() => handleDecrease(index)} /></div>
                                                    <div style={{ marginTop: '5px', marginLeft: '10px', }} >{item.cartValue}</div>
                                                    <div ><AddIcon style={{ width: '16px', marginLeft: '10px' }} onClick={() => handleIncrease(index)} /></div>
                                                </div>

                                            </div>

                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Dialog>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    _add_item: (item) => dispatch(addItem(item)),
    _remove_item: (id) => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowDialog)

