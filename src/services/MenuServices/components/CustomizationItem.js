import React,{useState} from 'react'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg';
import VegIcon from '../../../assets/home/vegicon.png'
import Checkbox from '@material-ui/core/Checkbox';
import { useEffect } from 'react';

const CustomizationItem = ({item,i,dish,selectedCustomization,handleAddonChange}) => {
    
    // const checkState=(subitem)=>{
    //     if(selectedCustomization.find(t=>t.pk==item.pk)!=undefined){
    //         console.log('outer if===>')
    //         if(selectedCustomization.find(t=>t.pk==item.pk).fields.find(q=>q.pk==subitem.pk))
    //         { console.log("inner if==>",selectedCustomization.find(t=>t.pk==item.pk).fields.find(q=>q.pk==subitem.pk))
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     }else{
    //         return false;
    //     }
    // }
    // const [checkArr,setCheckArr]= useState([])
    // useEffect(()=>{
    //     item.fields.forEach(elem=>{
    //         setCheckArr(prev=>[...prev,{checked: false,pk:elem.pk}])
    //     })

    // },[])
    // const [state,setState]= useState(true);
    // const handleForceClick=()=>{
    //     setState(prev=>!prev);
    // }
    return (
        <div style={i===dish.customizations.length-1?{paddingBottom:"90px"}:{}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ marginTop: '15px',marginLeft:"20px" }}>   
                                    <div style={{ color: '#6d6d6d' }}>{item.name}({item.min_select}/{item.max_select})</div>
                                </div>
                            </div>

                        {item.fields.map((subitem,ind)=>
                        <div key={ind} style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ marginTop: '15px' }}>   <div style={{ display: 'flex' }}><div style={{ marginLeft: '10px', marginRight: '10px' }}>
                                    {subitem.is_vegetarian? (<img style={{ height: '12px', marginLeft: '10px' }} src={VegIcon} />):(<img style={{ height: '12px', marginLeft: '5px' }} src={NonVegIcon} />)}
                                </div>
                                    <div style={{ color: '#6d6d6d' }}>{subitem.name}</div></div>
                                </div>
                                <div style={{ display: 'flex', }}>
                                    <div style={{ marginTop: '15px', color: '#6d6d6d' }}> &#8377;&nbsp; {subitem.cost}</div>
                                    <div style={{ margin: '0', }}>
                                        <Checkbox
                                            checked={selectedCustomization.find(t=>t.pk==item.pk)?.fields.includes(subitem)==undefined?false:selectedCustomization.find(t=>t.pk==item.pk).fields.includes(subitem)}
                                            onChange={(e)=>handleAddonChange(e,item,subitem,item.max_select)}
                                            // onClick={handleForceClick}
                                            style={{ color: 'red' }}
                                        />
                                        {/* <input type="checkbox" onChange={(e)=>handleAddonChange(e,item,subitem,item.max_select)}  checked={selectedCustomization.find(t=>t.pk==item.pk)?.fields.includes(subitem)}  /> */}
                                        </div>
                                </div>
                            </div>
                            )}
        </div>
    )
}

export default CustomizationItem
