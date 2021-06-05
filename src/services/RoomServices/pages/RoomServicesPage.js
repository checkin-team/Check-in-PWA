import React from 'react';
import {useHistory} from 'react-router-dom';

import BackButton from '../../../assets/RoomServices/BackButton.svg';
import MyRequest from '../components/MyRequest';

const RoomServicesPage = props => {

    const navBarStyle = {
        paddingTop: "2.3vh",
        paddingLeft: "4.78vw",
        paddingRight: '6.25vw',
        paddingBottom: '1vh',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '100',
        background: 'white',
        minWidth: '100vw'
    }

    const backButtonStyle = {
        paddingRight : "3.28vw",
        width: "3.75vw",
        height: "3.7vh",
        display : "inline"
    }

    const headingStyle = {
        display: 'inline',
        fontSize : "3.7vh",
        verticalAlign : "bottom",
        color: '#6d6d6d',
        fontFamily: "JosefinSans-Regular"
    }

    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }


    return (
        <React.Fragment>
            <div style={navBarStyle}>
                <img onClick={goBack} src={BackButton} alt="Back Button" style={backButtonStyle} />
                <p style={headingStyle}>My Request</p>
            </div>
            <MyRequest />
        </React.Fragment>
    );
}

export default RoomServicesPage;