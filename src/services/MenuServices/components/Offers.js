import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Percentage from '../../../assets/menu/percentageicon.svg';
import Carousel from 'react-material-ui-carousel'
// import Drinks from '../../../assets/menu/drinks.svg'
// import Food from '../../../assets/menu/food.svg'
import Divider from '@material-ui/core/Divider';
// import CategoriesMenu from './CategoriesMenu'
// import Special from '../../../assets/menu/special.svg'
import { connect } from "react-redux"
import parser from 'html-react-parser'

function Offers(props) {
    const { menu } = props;
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    const promos = menu.promos.data;
    console.log(promos);
    
    return (
        <div>
            <div style={{marginLeft: "0vw"}}> <ScrollMenu
                alignCente={false}
                data={promos.map((res,index) =>
                    <Card key={index} variant="outlined" style={index===0?{ height: "60px", width: "160px", margin: "20px 10px 0px 15px", display: 'flex' }:{ height: "60px", width: "160px", margin: "20px 10px", display: 'flex' }}>

                        <Typography>
                            <p style={{ display: 'flex',color:"#6d6d6d", marginBottom: '0', marginLeft: '6px', fontSize: '14px' }}>
                                <img src={Percentage} />&nbsp;Get&nbsp;<div style={{ whiteSpace: 'pre-line', fontSize: '11px',color:"#ff4f19" }} > {parser(res.name)}</div> </p>
                            <p style={{ marginTop: '0px',color:"#6d6d6d", marginLeft: '6px', fontSize: '10px', marginLeft: '30px', }}>Code:{res.code} </p>
                        </Typography>
                    </Card>
                )} /></div>
            <Divider style={{ height: '5px', width: "100%" }} />

        </div>)
}





const mapStateToProps = (state) => ({
    menu: state.menu,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Offers)


