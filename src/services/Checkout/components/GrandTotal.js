import React from 'react'
import Divider from '@material-ui/core/Divider'

export default function GrandTotal({settleBillDetails}) {



    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', marginLeft: '5vw', marginRight: '5vw', color: '#6d6d6d', fontSize: '13px', }}>
                <div >
                    <div style={{ margin: '5px',marginLeft: '0' }}>SubTotal</div>
                    <div style={{ margin: '5px',marginLeft: '0'  }}>Charges</div>
                    <div style={{ margin: '5px',marginLeft: '0'  }}>Taxes</div>
                    {/* <div style={{ margin: '5px' }}>Promo</div> */}
                    <div style={{ margin: '5px',marginLeft: '0'  }}>Discount</div>
                    {/* <div style={{ margin: '5px' }}>Browine Cash</div> */}
                </div>
                <div style={{textAlign : 'right'}}>
                    <div style={{ margin: '5px',marginRight: '0'  }}> &#8377;&nbsp;{settleBillDetails?.data?.bill?.subtotal}</div>
                    <div style={{ margin: '5px',marginRight: '0'  }}> &#8377;&nbsp;{settleBillDetails?.data?.bill?.total_charges}</div>
                    <div style={{ margin: '5px',marginRight: '0'  }}> &#8377;&nbsp;{settleBillDetails?.data?.bill?.tax}</div>
                    {/* <div style={{ margin: '5px' }}> &#8377;&nbsp;{settleBillDetails?.data?.bill?.promo}</div> */}
                    <div style={{ margin: '5px',marginRight: '0'  }}> &#8377;&nbsp;{settleBillDetails?.data?.bill?.discount}</div>
                    {/* <div style={{ margin: '5px' }}> &#8377;&nbsp;{null}</div> */}

                </div>
            </div>

            <Divider style={{ margin: '10px' }} />
            <div className='d-flex justify-content-between' style={{ margin: '0px 20px', color: '#ff5656', fontWeight: 600 }}>
                <div>GRAND TOTAL</div>
                <div>&#8377;&nbsp;{settleBillDetails?.data?.bill?.total}</div>
            </div>

        </>
    )
}