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

    const requestStyle = {
        marginRight: '12.81vw',
        color: '#6d6d6d',
        fontSize: '3.125vw'
    }

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

    const requests = [
        {
            request: 'Send houskeeping staff to room.', status : 'PENDING'
        },
        {
            request: 'Send fresh towels to room.', status : 'PENDING'
        },
        {
            request: 'The food served to us burnt. Can you replace the food or provide a refund?', status : 'RESOLVED'
        }
    ];

    const requestsContainerStyle = {
        paddingTop: '8.25vh',
        paddingLeft: "4.78vw",
        paddingRight: '6.25vw',
    }

    return (
        <div>
            <div style={navBarStyle}>
                <img onClick={goBack} src={BackButton} alt="Back Button" style={backButtonStyle} />
                <p style={headingStyle}>My Request</p>
            </div>
            <div style={requestsContainerStyle}>
                {requests.map(ele => {
                    return ( 
                    <div style={{...divStyle,marginTop: '2.87vh'}}>
                        <span style={requestStyle}>{ele.request}</span>
                        {ele.status === 'PENDING'?
                            <span style={statusButtonStyle}>{ele.status}</span>:
                            <span style={{...statusButtonStyle,background: '#32c282'}}>{ele.status}</span>
                        }
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyRequest;