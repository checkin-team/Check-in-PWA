import React from 'react'
import Divider from '@material-ui/core/Divider'

export default function GrandTotal() {


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', marginLeft: '30px', marginRight: '30px', color: '#6d6d6d', fontSize: '13px', }}>
                <div >
                    <div style={{ margin: '5px' }}>SubTotal</div>
                    <div style={{ margin: '5px' }}>Charges</div>
                    <div style={{ margin: '5px' }}>Taxes</div>
                    <div style={{ margin: '5px' }}>Promo</div>
                    <div style={{ margin: '5px' }}>Discount</div>
                    <div style={{ margin: '5px' }}>Browine Cash</div>
                </div>
                <div>
                    <div style={{ margin: '5px' }}> &#8377;&nbsp;375.00</div>
                    <div style={{ margin: '5px' }}> &#8377;&nbsp;10.00</div>
                    <div style={{ margin: '5px' }}> &#8377;&nbsp;18.75</div>
                    <div style={{ margin: '5px' }}> &#8377;&nbsp;-100.75</div>
                    <div style={{ margin: '5px' }}> &#8377;&nbsp;-37.75</div>
                    <div style={{ margin: '5px' }}> &#8377;&nbsp;-129.00</div>

                </div>
            </div>

            <Divider style={{ margin: '10px' }} />
            <div className='d-flex justify-content-between' style={{ margin: '0px 20px', color: '#ff5656', fontWeight: 600 }}>
                <div>GRAND TOTAL</div>
                <div>&#8377;&nbsp;265.00</div>
            </div>

        </>
    )
}