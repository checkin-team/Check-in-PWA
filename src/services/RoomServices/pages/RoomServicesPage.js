import React from 'react';
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from "react-redux";
import BackButton from '../../../assets/RoomServices/BackButton.svg';
import MyRequest from '../components/MyRequest';
import { loadRequestData } from '../../Home/middleware/index';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const {state} =props;
    useEffect(()=>{
        props.loadRequestData_();
    },[])

    if(state.requestData.isLoading===true)
    return <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
    <CircularProgress style={{color:"#ff5656"}} size={50} />
    </div>
  
    return (
        <React.Fragment>
            <div style={navBarStyle}>
                <img onClick={goBack} src={BackButton} alt="Back Button" style={backButtonStyle} />
                <p style={headingStyle}>My Request</p>
            </div>
            <MyRequest state={state}/>
        </React.Fragment>
    );
}
const mapStateToProps = (state) => ({
    state: state.home,
})

const mapDispatchToProps = (dispatch) => ({
    loadRequestData_: ()=>dispatch(loadRequestData()),
})
export default connect(mapStateToProps, mapDispatchToProps)(RoomServicesPage)