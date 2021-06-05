import Veg from '../../../assets/home/vegicon.png';
import nonVeg from '../../../assets/home/nonvegicon.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import MenuCustomisation from "./MenuCustomisation"
import { addItem, removeItem } from "../../Cart/actions/actionCreator"
import { connect } from 'react-redux'
import ShowDialog from './ShowDialog'
import  '../../../stylings/displaydishstyle.css'

function Displaydish(props) {
    // const [loading, setloading] = useState(true);
    const { _add_item, _remove_item } = props
    const [open,setOpen] = useState(false)
    let Width = window.innerWidth;
    const history = useHistory()
    const [Items, setItems] = React.useState(props.obj.data);
    console.log(Items)
    const handleIncrease = (index) => {
        console.log(Items[index].name)
        const recItems = JSON.parse(JSON.stringify(Items))
        if (recItems[index].isCustomised === true)
            return handleOpenSlides(true)
        const cartValue = recItems[index].cartValue
        console.log(recItems[index].cartValue)
        recItems[index].cartValue = cartValue + 1
        setItems(recItems)
        
        _add_item(recItems[index])
        console.log(Items[index].cartValue) 
    }
    const handleDecrease = (index) => {
        
        const recItems = JSON.parse(JSON.stringify(Items))
        const cartValue = recItems[index].cartValue
        console.log(cartValue)
        recItems[index].cartValue = cartValue - 1
        
        setItems(recItems)
        console.log(Items[index].cartValue)
        _remove_item(recItems[index].id)
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

    {/* Since the tags wont be only of 2 types like recommended and must try. There will be many
         so for that i made an object with property named as tag and its corresponding icon html element */}
    const itemTypeIcons = {
        "RECOMMENDED": <WhatshotIcon className="item-type-icon"/>,
        "MUSTTRY": <ThumbUpIcon className="item-type-icon"/>,
        "BEST SELLER": <FavoriteIcon className="item-type-icon" style={{color: "black"}}/>,
        "NEW ARRIVAL": <FiberNewIcon className = "item-type-icon"/>
    }
    return (

        <div id = {props.obj.categoryName} style={{ marginBottom: '30px', width: "100%"}}>
            <h3 style={{ color: '#6d6d6d', marginLeft: "5px" }}>&nbsp;{props.obj.categoryName}</h3>

            {Items.map((item, index) =>
                <div style={{ height: '150px', width: "100%", marginLeft: "2px"}}>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', marginLeft: "5px" }} >
                            <div>  {item.mealtype === "veg" ?
                                (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={Veg} />)
                                : (<img style={{ height: "15px", width: "15px", marginLeft: "5px" }} src={nonVeg} />)}</div>
                            <div style={{ width: "160px"}} >
                                <div

                                    style={{
                                        height: '18px',
                                        width: `${5.3*(item.type.length) + 25 + 3*(item.type.length)}px`,
                                        marginLeft: '12px',
                                        borderRadius: '10px 4px 4px 10px',
                                        marginBottom: '10px',
                                        backgroundColor: itemTypeColors[item.type]
                                    }}>
                                         {/* here in the width, i calculated an approx width per letter because the tags for the dishes can be anything other than
                                            must try or recommended and the tag width must adjust according to that so i ended up at an approx relationship */}
                                    <div >

                                        <div><div style={{ height: '2px' }}>{itemTypeIcons[item.type]}
                                        </div> <span style={{ color: '#fff', marginBottom: '10px', marginLeft: '25px', fontSize: 10 }}>  {item.type}</span> </div>
                                    </div>

                                </div>

                                <div style={{ marginLeft: '-16px' }} onClick={() => handleOpenSlides(item.isCustomised)}>
                                    <div style={{ marginTop: '0', color: '#6d6d6d' }} >{item.name}</div>
                                    <div style={{ marginTop: '10px', color: '#6d6d6d' }}> &#8377;{item.price}</div>
                                    <div style={{color: "grey", opacity: "0.8", fontSize: "0.8em", marginTop: "5px"}} id={`${props.obj.categoryName} ${index} desc`} className="description">

                                    {/* Here the id of description div consist of the category name plus the index of the dish inside that collection of dishes
                                        so that we easily get the correct div for expanding it on the click on more button for displaying whole description*/ }

                                        {item.description} 
                                    </div> {item.description.length > 60? 
                                    (<span style={{color: "#ff5656"}} id="more" onClick={(event) => showFullDescription(event, props.obj.categoryName,index)} >more...</span>) : (<> </>)}
                                </div>
                            </div>
                            
                        </div>
                        <div style = {{ paddingTop: "95px", marginRight: "20px"}}>
                            {item.image === "" ? (<div style={{marginLeft: "100px", marginTop: "-95px"}} id="add-button-container-without-image">
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
                                                (<div><div
                                                    style={{ paddingTop: '5px', paddingLeft: '20px', paddingRight: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                                                    onClick={() => handleIncrease(index)} 
                                                >
                                                    ADD 
                                                    
                                                </div>
                                                </div>
                                                )
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
                            </div>) :

                                (<div style={{ zIndex: -1, marginTop: "-105px" }}>
                                    <div style={{ paddingTop: "10px"}}><img style={{
                                        
                                        //border: "2px solid black",
                                        height: '80px',
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

                                                // marginBottom: '-140px'
                                            }}

                                            >
                                                {item.cartValue === 0 ?
                                                    (
                                                        item.isCustomised ?
                                                            <MenuCustomisation variants={item.variants} />
                                                            :
                                                            <div
                                                                style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
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
                                                                <div onClick={() => handleDecrease(index)}><RemoveIcon style={{ width: '16px', marginLeft: '5px' }} /></div>
                                                                <div style={{ marginTop: '5px', marginLeft: '10px', }} >{item.cartValue}</div>
                                                                <div onClick={() => handleIncrease(index)}><AddIcon style={{ width: '16px', marginLeft: '10px' }} /></div>
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
        </div >
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    _add_item: (item) => dispatch(addItem(item)),
    _remove_item: (id) => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Displaydish)