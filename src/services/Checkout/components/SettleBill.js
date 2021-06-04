import React from 'react'
import VegIcon from '../../../assets/home/vegicon.png'
import NonVegIcon from '../../../assets/home/nonvegicon.jpg'

export default function SettleBill() {



    const billdetails = [
        {
            item: "Butter Chicken",
            price: "123",
            type: 'nonveg',
            quantity: '2',
            isCustomised: false
        },
        {
            item: "Tawa Rotti",
            price: "423",
            type: 'veg',
            quantity: '4',
            isCustomised: false
        },
        {
            item: "Pizza",
            price: "123",
            type: 'nonveg',
            quantity: '2',
            isCustomised: true
        },
        {
            item: "Pizza",
            price: "123",
            type: 'nonveg',
            quantity: '2',
            isCustomised: false
        },
        {
            item: "Pizza",
            price: "123",
            type: 'nonveg',
            quantity: '2',
            isCustomised: true
        },
    ]
    return (
        <div style={{ marginTop: '20px', marginRight: '10px' }}>
            {billdetails.map(billitem =>
                <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                    <div style={{ margin: '20px 0px 0px 20px', display: 'flex' }}>
                        {billitem.type === "veg" ?
                            (<img src={VegIcon} style={{ height: '10px', width: '10px' }} />)
                            :
                            (<img src={NonVegIcon} style={{ height: '10px', width: '10px' }} />)}
                        <div style={{ marginLeft: '15px', color: '#6d6d6d', fontSize: '13px', display: 'flex' }}>
                            <div> {billitem.item} x {billitem.quantity} </div>
                            <div> {billitem.isCustomised === true ? (<div> (Customized)</div>)
                                : null}</div>
                        </div>
                    </div>
                    <div style={{ color: '#6d6d6d', fontSize: '13px', marginTop: '15px' }}>
                        &#8377;&nbsp;{billitem.price}
                    </div>

                </div>

            )
            }

        </div>
    )
}
