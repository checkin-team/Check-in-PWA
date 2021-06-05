import React from 'react'
import RoundedButton from '../../../shared/components/Button/Rounded';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {fade, makeStyles} from '@material-ui/core/styles'


export default function BrowseMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { ids: data } = props; 
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        
         
         
    };

    const handleClose = () => {
        setAnchorEl(null);
        
         
    };
    const Space = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    return (
        <div style={{ bottom: 30, right: 0, position: 'fixed', zIndex: 1000,  }}>
            <RoundedButton onClick={handleClick} style={{ backgroundColor: '#0295aa', textTransform: 'uppercase', fontSize: '13px'}} >
                <span style={{display: "block",marginBottom: "-2px"}}>Browse Menu</span>
            </RoundedButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{overflow: 'auto', backgroundColor: "rgb(0, 0, 0, 0.5)"}}
            >   
                {data.map((obj) => {
                    return(
                        <a href={obj.href} style={{textDecoration: "none", color: "#343a40", boxShadow:" 0px 0px 5px #fff"}} onClick={handleClose}><MenuItem className="d-flex justify-content-between"><span>{obj.name}</span>&nbsp; &nbsp; <span>{obj.ndish}</span></MenuItem></a>
                    )
                })}
                
            </Menu>
        </div>
    )
}