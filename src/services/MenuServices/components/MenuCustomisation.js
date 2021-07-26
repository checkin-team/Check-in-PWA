import React,{useState} from 'react';
import NonVegIcon from '../../../assets/home/nonvegicon.jpg';
import Checkbox from '@material-ui/core/Checkbox';
import VegIcon from '../../../assets/home/vegicon.png'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Radio from '@material-ui/core/Radio';
import { addItem, removeItem } from "../../Cart/actions/actionCreator"
import { _addItem,_removeItem,_calculateAmount } from '../../Cart/middleware';
import { connect } from 'react-redux'
import CustomizationItem from './CustomizationItem';
import { useEffect } from 'react';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function MenuCusomisation({dish, _add_item, _remove_item,cart }) {
    const classes = useStyles();
    // my code 
    const [selectedType,setSelectedType]= useState(null);
    const [selectedCustomization,setSelectedCustomization]= useState([]);
    const [open, setOpen] = React.useState(false)
    const [total,setTotal] = React.useState(0);
    const [selection, setSelection] = React.useState([])

    const toggleDrawer = () => {
        setOpen((prevState) => !prevState)
    }

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    let Width = window.innerWidth;
    let Height = window.innerHeight;

    const addToCart =() => {
        // selection.forEach( (item)=>{
        //     let temp ={...dish};
        //     temp.variantChosen=item;
        //      _add_item(temp,cart)

    // })
        if(dish.types.length>1){
           const index= dish.types.findIndex((item)=>item==selectedType);
            const tempDish= {...dish};
            tempDish.type_index=index;
            if(dish.customizations){
                tempDish.customizations=[...selectedCustomization];
            }
            _add_item(tempDish,cart);
        }else{
            const index= 0;
            const tempDish= {...dish};
            tempDish.type_index=index;
            if(dish.customizations){
                tempDish.customizations=[...selectedCustomization];
            }
            _add_item(tempDish,cart);
        }
    toggleDrawer()
    }
    // console.log(dish)
    const handleTypeChange=(e)=>{
        setSelectedType(e.target.value);
    }

    const handleAddonChange=(e,item,subitem,max_select)=>{
            const selectedCustomizationTemp=[...selectedCustomization];   
        if(e.target.checked===true){
               console.log('true executed==>',e.target.checked);
            if(selectedCustomizationTemp.find(i=>i.pk===item.pk)){
              const index= selectedCustomizationTemp.findIndex(i=>i.pk===item.pk)
              if(selectedCustomizationTemp[index].fields.length<max_select){
                  selectedCustomizationTemp[index].fields.push(subitem);
                  setSelectedCustomization([...selectedCustomizationTemp])
                 }else{
                    console.log("inside else block executed==>");
                const popElem = selectedCustomizationTemp[index].fields.pop();
                selectedCustomizationTemp[index].fields.push(subitem);
                setSelectedCustomization([...selectedCustomizationTemp])
                
              }  
            }else{
                const temp = {...item};
                temp.fields=[subitem];
                selectedCustomizationTemp.push(temp);
                setSelectedCustomization([...selectedCustomizationTemp])
              
            }
           }else{
               console.log('false executed===>',e.target.checked)
               if(selectedCustomizationTemp.find(i=>i.pk===item.pk)){
                const index= selectedCustomizationTemp.findIndex(i=>i.pk===item.pk)
                  selectedCustomizationTemp[index].fields.pop(subitem);
                  setSelectedCustomization([...selectedCustomizationTemp])
                    
                  if(selectedCustomizationTemp[index].fields.length===0){
                        selectedCustomizationTemp.pop(selectedCustomizationTemp[index]);
                        setSelectedCustomization([...selectedCustomizationTemp])
                    
                    }
                }  
             
            }
        }
        useEffect(()=>{
          var temp= selectedCustomization.reduce((acc,customItem)=>{
                let subtotal= customItem.fields.reduce((subAcc,customSubItem)=>{
                    return subAcc+parseFloat(customSubItem.cost)
                },0);
                console.log(subtotal);
                return subtotal+acc;
            },0)
            if(selectedType){

            const typeIndex= dish.types.findIndex(i=>i===selectedType);   
            temp+=parseFloat(dish.costs[typeIndex])
        }
        setTotal(temp);
        },[selectedCustomization,selectedType])
    return (
        <div>
            <div
                style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                onClick={() => toggleDrawer()}
            >
                ADD<br/><p style={{marginLeft: '-5vw',marginTop: '5px'}}>customizable</p>
            </div>
            <Drawer anchor={"bottom"} open={open} onClose={() => toggleDrawer()}>
                <div
                    style={{ height: window.innerHeight * 0.6 }}
                >
                    <div
                        style={{ width: '100%', height: '50px',overflow:"scroll",marginBottom:"20px" }}
                    >
                        <div >
                            <div className="text-center"
                                style={{ fontSize: '20px', color: '#6d6d6d', marginTop: '13px', fontWeight: 600 }}
                            >
                                {dish?.name}
                        </div>
                        </div>
                    </div>
                    {dish.types.length>1?<>
                    <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Choose Type&nbsp;(1/1)</b></div>
                        {dish.types.map((element,index)=>
                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ marginTop: '15px',marginLeft:"20px" }}>   
                                    <div style={{ color: '#6d6d6d' }}>{element}</div>
                                </div>
                                <div style={{ display: 'flex', }}>
                                    <div style={{ marginTop: '15px', color: '#6d6d6d' }}> &#8377;&nbsp; {dish.costs[index]}</div>
                                    <div style={{ margin: '0', }}>
                                    <Radio
                                    checked={selectedType === element}
                                    onChange={handleTypeChange}
                                    value={element}
                                    style={{color:"#ff5656"}}
                                    />
                                </div>

                            </div>
                            </div>

                        )}
                    </>:null}

                    {dish.customizations.length>1?<><div style={{ margin: "20px", color: '#6d6d6d', }}><b>Choose Add-Ons&nbsp;</b> </div>
                    <div >
                        {dish.customizations.map((item,i) =>
                        <CustomizationItem key={i} item={item} i={i} dish={dish} selectedCustomization={selectedCustomization} handleAddonChange={handleAddonChange}/>                            
                        )

                    }
                    </div>
                    </>:null}
                    {/* <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Other Beverages Add On&nbsp;</b>(1/5)</div> */}
                    {/* <div style={{
                        height: Height * 0.07 + 'px',
                        width: Width * 0.85 + 'px',
                        background: '#32c282',
                        marginTop: Height * 0.48 + 'px',
                        position: 'fixed',
                        marginLeft: '7.75%',
                        zIndex: 1000,
                        borderRadius: '5px',
                        bottom: 10
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between',alignItems:"center",height:"100%", color: '#fff', position: 'sticky' }}>
                            <div style={{padding:"0 1rem"}}>
                                Total&nbsp;&#8377; 123.00
                            </div>
                            <div style={{padding:"0 1rem",cursor:"pointer"}} onClick={addToCart} >
                                ADD ITEM
                            </div>
                        </div>
                    </div> */}
                    <div style={{zIndex:"10",display:"flex",justifyContent:"center",position:"fixed",bottom:"0",opacity:"1",width:"100%",background:"white",padding:"1rem 0"}}>
                    <div style={{ display: 'flex',width:"90%", justifyContent: 'space-between',alignItems:"center",height:"100%",background:"#32c282", color: '#fff',borderRadius:"0.2rem"  }}>
                            <div style={{padding:"1rem 1rem"}}>
                                Total&nbsp;&#8377; 
                                { total }                          
                            </div>
                            <div style={{padding:"1rem 1rem",cursor:"pointer"}} onClick={addToCart} >
                                ADD ITEM
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>

        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    _add_item: (item,cart) => dispatch(_addItem(item,cart)),
    _remove_item: (item,cart) => dispatch(_removeItem(item,cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuCusomisation)
