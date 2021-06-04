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
import Radium from 'radium';
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

function MenuListComposition() {
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
        marginTop: '0vh',
        border: '1px solid #cdcdcd',
        borderRadius: '1vw',
        ":focus": {
            outline: 'none'
        },
        fontFamily: '"Josefin Sans", sans-serif',
        minWidth: '40vw',
        padding: '0.6vh 2vw',
        maxWidth: '40vw'
    }

    const closeIconStyle = {
        position: 'absolute',
        width: '4vw',
        height: '4vw',
        right: '1vw',
        top: '1vw'
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: "100vw" }}>

            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                >
                    All
            <div style={{ marginBottom: '.5px' }}>     {open ? (<ArrowDropUpIcon />) : (<ArrowDropDownIcon />)}</div>

                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}>Food</MenuItem>
                                        <MenuItem onClick={handleClose}>Drink</MenuItem>
                                        <MenuItem onClick={handleClose}>Special</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
            <div style={{ margin: '10px' }}>
                {buttonClicked ? 
                    (<div style={{position: 'relative'}}>
                        <input style={searchStyle} type="text" placeholder="Start typing to search..." />
                        <img src={cancel} style={closeIconStyle} onClick={() => setButtonClicked(false)}/>
                    </div>):
                    (<SearchIcon onClick={() => setButtonClicked(true)}/>)
                }
                
                </div>
        </div>
    );
}

export default Radium(MenuListComposition);