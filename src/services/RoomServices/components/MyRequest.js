import React from 'react';
import {connect} from 'react-redux';

function MyRequest(props) {

    const divStyle = {
        paddingTop: "1.11vh",
        paddingBottom: "1.2vh",
        paddingRight: "2.34vw",
        paddingLeft: "3.75vw",
        border: "1px solid rgb(140,140,140,0.1)",
        borderRadius : "1.25vw",
        boxShadow: "0 0 0.625vw 0px rgb(140,140,140,0.5)",
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
        fontSize: '3.125vw',
        fontFamily: "josefin_sans_semibold",
    }

    const requestsContainerStyle = {
        paddingTop: '8.25vh',
        paddingLeft: "4.78vw",
        paddingRight: '6.25vw',
    }

    const noRequestStyle = {
        textAlign: 'center',
        fontSize: '6vw',
        marginTop: '25vh'
    }

    // const eventTypes={
    //             400: "EVENT_NONE",
    //             401:'EVENT_SESSION_CHECKIN',
    //             409:'EVENT_SESSION_CHECKOUT',
    //             451:'EVENT_SCHEDULED_SESSION_NEW',
    //             453:'EVENT_SCHEDULED_SESSION_PENDING',
    //      455:'EVENT_SCHEDULED_SESSION_ACCEPTED',
    //      459:'EVENT_SCHEDULED_SESSION_CANCELLED',
    //      460:'EVENT_SCHEDULED_SESSION_DONE',
    //      462:'EVENT_SCHEDULED_SESSION_CLOSE',

    //     EVENT_MEMBER_ADD = 411
    //     EVENT_MEMBER_REMOVE = 412
    //     EVENT_HOST_ASSIGNED = 415

    //     EVENT_REQUEST_CHECKOUT = 421
    //     EVENT_REQUEST_SERVICE = 422

    // }
    const eventStatus={
        0:'NONE',
        1:'STATUS_OPEN',
        5:'In PROGRESS',
        6:'COOKED',
        10:'DONE',
        9:'CANCELLED',
    }
    return (
            <div style={requestsContainerStyle}>
                {props.state.requestData.data.length > 0 ? props.state.requestData.data.map(ele => {
                    return ( 
                    <div style={{...divStyle,marginTop: '2.87vh'}}>
                        <span style={requestStyle}>{ele.message}</span>
                        {ele.status === 1?
                            <span style={{...statusButtonStyle,background: '#32c282'}}>{eventStatus[ele.status]}</span>:
                            <span style={statusButtonStyle}>{eventStatus[ele.status]}</span>
                        }
                    </div>
                    )
                }) : <p style={noRequestStyle}>No requests at the moment.</p>}
            </div>
    )
}

const mapStateToProps = state => ({
    requests : state.home.serviceRequest,
})

export default connect(mapStateToProps)(MyRequest);