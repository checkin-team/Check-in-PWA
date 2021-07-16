import React from 'react';
import Fab from '@material-ui/core/Fab';
import MenuImage from '../../../assets/home/menu.svg';
import { useHistory } from 'react-router-dom'


export default function FloatingActionButtons() {

    const history = useHistory()
    const handleOpen = () => {
        history.push("/menu")
    }

    return (
        <div >
            {/* <Fab color="primary" aria-label="add"> */}
                <img style={{ height: "62px", width: "62px", borderRadius: "50%" ,position: "fixed",right:"1rem", bottom:"3.5rem",cursor:"pointer"}} src={MenuImage} onClick={handleOpen} />
            {/* </Fab> */}
        </div>
    );
}
