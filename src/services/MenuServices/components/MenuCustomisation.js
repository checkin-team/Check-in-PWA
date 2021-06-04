import React from 'react';
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

import { addItem, removeItem } from "../../Cart/actions/actionCreator"
import { connect } from 'react-redux'
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

function MenuCusomisation({ variants, _add_item, _remove_item }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)

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

    const addToCart = () => {
        selection.forEach(item => {
            _add_item(item)
        })
        toggleDrawer()
    }
    return (
        <div>
            <div
                style={{ paddingTop: '5px', paddingLeft: '20px', fontSize: '14px', color: '#ff5656', fontWeight: 700 }}
                onClick={() => toggleDrawer()}
            >
                ADD
            </div>
            <Drawer anchor={"bottom"} open={open} onClose={() => toggleDrawer()}>
                <div
                    style={{ height: window.innerHeight * 0.6 }}
                >
                    <div
                        style={{ width: '100%', height: '50px' }}
                    >
                        <div >
                            <div className="text-center"
                                style={{ fontSize: '20px', color: '#6d6d6d', marginTop: '13px', fontWeight: 600 }}
                            >
                                Haka noodle
                        </div>
                        </div>
                    </div>
                    <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Choose Add-Ons&nbsp;</b> (1/5)</div>
                    <div>
                        {variants.map(item =>
                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <div style={{ marginTop: '15px' }}>   <div style={{ display: 'flex' }}><div style={{ marginLeft: '10px', marginRight: '10px' }}>
                                    {item.type === "nonveg" ? (<img style={{ height: '12px', marginLeft: '5px' }} src={NonVegIcon} />) : (<img style={{ height: '12px', marginLeft: '10px' }} src={VegIcon} />)}
                                </div>
                                    <div style={{ color: '#6d6d6d' }}>{item.name}</div></div>
                                </div>
                                <div style={{ display: 'flex', }}>
                                    <div style={{ marginTop: '15px', color: '#6d6d6d' }}> &#8377;&nbsp; {item.price}</div>
                                    <div style={{ margin: '0', }}>
                                        <Checkbox
                                            checked={selection.some(t => t.variantId === item.variantId)}
                                            onChange={(e) => e.target.checked ? setSelection((prevState) => [...prevState, item]) : setSelection((prevState) => prevState.filter(t => t.variantId !== item.variantId))}
                                            inputProps={{ 'aria-label': 'success checkbox' }}
                                            style={{ color: 'red' }}
                                        /></div>
                                </div>

                            </div>

                        )

                        }
                    </div>
                    <div style={{ margin: "20px", color: '#6d6d6d', }}><b>Other Beverages Add On&nbsp;</b>(1/5)</div>
                    <div style={{
                        height: Height * 0.07 + 'px',
                        width: Width * 0.85 + 'px',
                        background: '#32c282',
                        marginTop: Height * 0.48 + 'px',
                        position: 'absolute',
                        marginLeft: '25px',
                        zIndex: 1000,
                        borderRadius: '5px',
                        bottom: 10
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '17px', marginTop: '25px', color: '#fff', position: 'sticky' }}>
                            <div>
                                Total&nbsp;&#8377; 123.00
                            </div>
                            <div onClick={addToCart} >
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

})

const mapDispatchToProps = (dispatch) => ({
    _add_item: (item) => dispatch(addItem(item)),
    _remove_item: (id) => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuCusomisation)
