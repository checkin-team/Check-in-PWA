import React from 'react';
import {useHistory} from 'react-router-dom';

import BackButton from '../../../assets/RoomServices/BackButton.svg';

function MyRequest() {

    const divStyle = {
        paddingTop: "1.11vh",
        paddingBottom: "1.2vh",
        paddingRight: "2.34vw",
        paddingLeft: "3.75vw",
        border: "1px solid #bebebe",
        borderRadius : "1.25vw",
        boxShadow: "0 0 0.625vw 0px #bebebe",
        display: 'flex',
        justifyContent: 'space-between'
    }

    const statusButtonStyle = {
        background: "#e88e45",
        color: "white",
        fontFamily: "josefin_sans_semibold",
        letterSpacing: "-0.03",
        fontSize: '2.5vw',
        borderRadius: "2.09vw",
        textAlign: 'center',
        maxHeight: '2.5vw',
        minWidth: '12vw',
        padding: '0.7vh 3.5vw'
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
        <div style={{marginTop: "2.3vh",marginLeft: "4.78vw", marginRight: '6.25vw'}}>
            <div>
                <img onClick={goBack} src={BackButton} alt="Back Button" style={backButtonStyle} />
                <p style={headingStyle}>My Request</p>
            </div>

            <div style={{...divStyle,marginTop: '4.25vh'}}>
                <span style={{marginRight: '12.81vw'}} >Send houskeeping staff to room.</span>
                <span style={statusButtonStyle}>PENDING</span>
            </div>
            <div style={{...divStyle,marginTop: '2.87vh'}}>
                <span style={{marginRight: '12.81vw'}} >Send fresh towels to room.</span>
                <span style={statusButtonStyle}>PENDING</span>
            </div>
            <div style={{...divStyle,marginTop: '2.87vh'}}>
                <span style={{marginRight: '12.81vw'}}>The food served to us burnt. Can you replace the food or provide a refund?</span>
                <span style={{...statusButtonStyle,background: '#32c282'}}>RESOLVED</span>
            </div>
        </div>
    )
}

export default MyRequest;