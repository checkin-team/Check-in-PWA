import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import cancel from '../../../assets/menu/cancel.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));
const ITEM_HEIGHT = 48;

function MenuListComposition({handleSearch,searchTerm}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    // Search Button Click Functions

    const [buttonClicked, setButtonClicked] = React.useState(false);

    const searchStyle = {
        marginTop: '2vh',
        border: '1px solid #cdcdcd',
        borderRadius: '10vw',
        fontFamily: '"Josefin Sans", sans-serif',
        minWidth: '82vw',
        padding: '1.5vh 2vw 1.5vh 10vw',
        marginLeft:'3vw'
    }

    const closeIconStyle = {
        position: 'absolute',
        width: '4vw',
        height: '4vw',
        right: '1vw',
        top: '1vw',
        cursor: 'pointer'
        
    }

    const searchIconStyle = {
        position:"absolute",
        cursor: 'pointer',
        left:"5vw",
        top: "3vh",
        color:"#bebebe"
    }

    return (
        <div style={{  width: "100%" }}>

                    
                        <input style={searchStyle} value={searchTerm} onChange={handleSearch} type="text" placeholder="Search across catalog" />
                     <SearchIcon style={searchIconStyle}  onClick={() => setButtonClicked(true)}/>
            
        </div>
    );
}

export default MenuListComposition;