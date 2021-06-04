import React from 'react';

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

    const requestStyle = {
        marginRight: '12.81vw',
        color: '#6d6d6d',
        fontSize: '3.125vw'
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
    )
}

export default MyRequest;