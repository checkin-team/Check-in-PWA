import React from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import Divider from '@material-ui/core/Divider';



let categories = [{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/B2726390-711B-4F16-95FB-270361BBF40A.svg',
    title: 'Drinks'
},
{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/8DE64735-BEA6-45E2-9F1C-430C00E12C12.svg',
    title: 'Food',
},
{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/56BF08BE-83AA-4350-92F2-235CAB742E2B.svg',
    title: 'Deserts'
},
{
    image: 'https://cdn.zeplin.io/5af42663188049271b3ae959/assets/56BF08BE-83AA-4350-92F2-235CAB742E2B.svg',
    title: 'Specials'
},


]
function Items({handleCategoryClick,currentCategory}) {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    return (
        <div style={{width: "100%"}}>
            <br />

            {/* <div style={{marginTop:"5vh"}}><ScrollMenu
                style={{marginLeft:"2vw"}}
                data={categories.map(res =>
                    <div key={res.title} style={{ height: '90px', width: '60px', margin: '20px' }}>
                        <img style={{ height: '60px', width: '40px' }} src={res.image} />
                        <div style={{ color: '#6d6d6d' }}>{res.title}</div>
                    </div>
                )}  />
            </div> */}
            <div style={{marginTop:"5vh",display:"flex",justifyContent:"space-between",width:"96vw",marginLeft:"2vw"}}>
                {/* style={{marginLeft:"2vw"}} */}
                {categories.map(res =>
                    <div key={res.title} onClick={()=>handleCategoryClick(res.title)} style={{display:"inline-flex",justifyContent:"center",flexDirection:"column",alignItems:"center", height: '90px', width: '60px',marginTop:"10px",marginBottom:"10px"}}>
                        <img style={{ height: '60px', width: '40px' }} src={res.image} />
                        <div style={currentCategory===res.title?{ color: '#ff5656' }:{ color: '#6d6d6d' }}>{res.title}</div>
                    </div>
                )}  
            </div>

            <div style={{ marginLeft: windowWidth * 0.08 + 'px', marginRight: windowWidth * 0.09 + 'px' }}>  <Divider /></div>
        </div>)
}

export default Items
