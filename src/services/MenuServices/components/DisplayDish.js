import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import MenuCustomisation from "./MenuCustomisation"
import { addItem, removeItem } from "../../Cart/actions/actionCreator";
import { connect } from 'react-redux';
import ShowDialog from './ShowDialog';
import  '../../../stylings/displaydishstyle.css';
import White from '../../../assets/home/White.jpg';
import {calculateAmount} from "../../Cart/actions/actionCreator"
import {_addItem,_removeItem,_calculateAmount} from "../../Cart/middleware/index"

function Displaydish(props) {
    // const [loading, setloading] = useState(true);
    const { _add_item, _remove_item,cart,Amount,searchTerm } = props
    const [open,setOpen] = useState(false)
    let Width = window.innerWidth;
    const history = useHistory()
    const [Items, setItems] = React.useState(props.obj.items);
    console.log(props)
    const handleIncrease = (item) => {
        _add_item(item,cart)
    }
    const handleDecrease = (item) => {
        _remove_item(item,cart)
    }
    const handleOpenSlides = (isCustomised) => {
        if (isCustomised === true) {

            // history.push("/sides")
        }
        console.log(Items.isCustomised)
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    }
    const showFullDescription = (event, category, index) => {
        const ele = document.getElementById(`${category} ${index} desc`)
        //  console.log(ele, event.target)
        ele.classList.toggle("description");
        event.target.classList.toggle("donotdisplay")
    }
    // setloading(false)
     //console.log(Items)
     {/* Since the tags wont be only of 2 types like recommended and must try. There will be many
         so for that i made an object with property named as tag and its corresponding color */}
    const itemTypeColors = {
        "RECOMMENDED": "#ffc850",
        "MUSTTRY" : "#ff5656",
        "NEW ARRIVAL": "#52b788",
        "BEST SELLER": "#c4f5fc"
    }

    // const ronit = {
    //     marginLeft: "100px",
    //     marginTop: "7vh"
    // }
    {/* Since the tags wont be only of 2 types like recommended and must try. There will be many
         so for that i made an object with property named as tag and its corresponding icon html element */}
    const itemTypeIcons = {
        "RECOMMENDED": <WhatshotIcon className="item-type-icon"/>,
        "MUSTTRY": <ThumbUpIcon className="item-type-icon"/>,
        "BEST SELLER": <FavoriteIcon className="item-type-icon" style={{color: "black"}}/>,
        "NEW ARRIVAL": <FiberNewIcon className = "item-type-icon"/>
    }

    // Making a useeffect to calculate amount 
    // useEffect(
    //     () => {
    //     console.log("item added")
    //       Amount(cart)
    //     },
    //     [handleIncrease,handleDecrease]
    //   )

    return (
        
       Items.filter(elem=>{
                if(searchTerm=='') return elem
                else if(elem.name.toLowerCase().includes(searchTerm.toLowerCase()))return elem
            }).length===0?null: <div id = {props.obj.name} style={{ marginBottom: '-70px', width: "100%"}}>
            <h3 style={{ color: '#6d6d6d', marginLeft: "10px", marginTop: '20px' }}>&nbsp;{props.obj.name}</h3>

            {Items.filter(elem=>{
                if(searchTerm=='') return elem
                else if(elem.name.toLowerCase().includes(searchTerm.toLowerCase()))return elem
            }).map((item, index) =>
                <div style={item.description.length >= 1? {height: 'auto',width: "100%", marginLeft: "8px",marginBottom: '2vh'}:{height: '11vh',width: "100%", marginLeft: "8px",marginBottom: '2vh'}}>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', marginLeft: "5px" }} >
                            <div>  {item.is_vegetarian===null?null:item.is_vegetarian === 'veg' ?
                                (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={Veg} />)
                                : (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                            <div style={{ width: "auto"}} >
                                

                                <div style={{ marginLeft: '10px' }} >
                                    <div style={{ marginTop: '0', color: '#6d6d6d' }} >{item.name}</div>
                                    {item.costs.length>1? <div style={{ marginTop: '10px', color: '#6d6d6d' }}> &#8377; {item.costs[0]}</div>:
                                    <div style={{ marginTop: '10px', color: '#6d6d6d' }}> &#8377;{item.costs[0]}</div>
                                    }
                                    {item.description !== ""?(<div style={{color: "grey", opacity: "0.8", fontSize: "0.8em", marginTop: "5px"}} id={`${props.obj.name} ${index} desc`} className="description">

                                    {/* Here the id of description div consist of the category name plus the index of the dish inside that collection of dishes
                                        so that we easily get the correct div for expanding it on the click on more button for displaying whole description*/ }

                                        {item.description} 
                                    </div>):null }{item.description.length > 60? 
                                    (<span style={{color: "#ff5656"}} id="more" onClick={(event) => showFullDescription(event, props.obj.name,index)} >...more</span>) : (<> </>)}
                                </div>
                            </div>
                            
                        </div>
                        <div style = {{ paddingTop: "95px", marginRight: "20px"}}>
                            {item.image === null? (<div style={{marginLeft: "100px", marginTop: "-95px"}} id="add-button-container-without-image">
                                <div style={{
                                    height: '20px',
                                    width: '70px',
                                    backgroundColor: '#ffefef',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: ' 1px solid #ff5656',
                                }}

                                >
                                    {cart.items.data?.find(i=>i.pk==item.pk)?.quantity  == undefined?
                                        (
                                            item.types.length>1||item.customizations.length>=1?
                                                (<div><MenuCustomisation dish={item}/>
                                                <p style={{marginLeft: '0vw',marginTop: '5px', color: '#6d6d6d', fontWeight: '500',fontSize: '11px',textAlign: 'center'}}>Customizable</p></div>)
                                                :
                                                (<div><div
                                                    style={{paddingTop: '5px', paddingLeft: '20px', paddingRight: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                                                    onClick={() => handleIncrease(item)} 
                                                >
                                                    ADD
                                                    
                                                </div>
                                                </div>
                                                )
                                        )
                                        : (
                                            <div style={{
                                                backgroundColor: '#ff5656', height: '24px',
                                                cursor: 'pointer', width: '71px', borderRadius: '5px',
                                            }}>
                                                <div style={{ display: 'flex', color: '#fff' }}>
                                                    <div ><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} onClick={() => handleDecrease(item)} /></div>
                                                    <div style={{ marginTop: '5px', marginLeft: '10px', }} >{cart.items.data.find(i=>i.pk==item.pk)?.quantity}</div>
                                                    <div ><AddIcon style={{ width: '16px', marginLeft: '10px' }} onClick={() => handleIncrease(item)} /></div>
                                                </div>
                                                
                                            </div>

                                        )}
                                </div>
                            </div>) :

                                (<div style={{ zIndex: -1, marginTop: "-105px" }}>
                                    <div style={{ paddingTop: "10px"}}><img style={{
                                        
                                        //border: "2px solid black",
                                        
                                        width: '25vw',
                                        maxHeight: '18.5vw',
                                        marginTop: '4px',
                                        borderRadius: '5px',
                                        marginLeft: '40px',
                                        position: 'absolute',
                                        right: "5px",
                                        pointerEvents: "all",
                                        cursor: "pointer"
                                    }} onClick={handleOpen} src={item.image}  />
                                    <ShowDialog index={index} image={item.image} item={item} open={open} onClose={handleClose} onPlus={handleIncrease} onMinus={handleDecrease} openSlides={handleOpenSlides} />
                                        <div style={{ marginLeft: "100px", position: 'relative', height: "22px", marginTop: "75px" }} id="add-button-container-with-image" >
                                            <div style={{
                                                height: '20px',
                                                width: '70px',
                                                backgroundColor: '#ffefef',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                border: ' 1px solid #ff5656',
                                                // position: 'absolute',
                                                // bottom: '5',
                                                // right: '2vw',


                                                // marginBottom: '-140px'
                                            }}

                                            >
                                                {cart.items.data?.find(i=>i.pk==item.pk&&i.variantChosen==item.variantChosen)?.quantity  == undefined?
                                                    (
                                                        item.types.length>1||item.customizations.length>=1?
                                                         <MenuCustomisation dish={item}/>
                                                            :
                                                            <div
                                                                style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                                                                onClick={() => handleIncrease(item)}
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
                                                                <div onClick={() => handleDecrease(item)}><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} /></div>
                                                                <div style={{ marginTop: '5px', marginLeft: '10px', }} >{cart.items.data?.find(i=>i.pk==item.pk)?.quantity}</div>
                                                                <div onClick={() => handleIncrease(item)}><AddIcon style={{ width: '16px', marginLeft: '10px' }} /></div>
                                                            </div>

                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>

                                </div>)}
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart

})

const mapDispatchToProps = (dispatch) => ({
    _add_item: (item,cart) => dispatch(_addItem(item,cart)),
    _remove_item: (item,cart) => dispatch(_removeItem(item,cart)),
    Amount: (data)=>dispatch(_calculateAmount(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Displaydish)