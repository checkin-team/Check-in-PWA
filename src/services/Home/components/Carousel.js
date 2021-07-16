import React from 'react';

function Example({details}) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            imageURL: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            imageURL: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            imageURL: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
            name: "Random Name #4",
            description: "Hello World!",
            imageURL: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
            name: "Random Name #5",
            description: "Hello World!",
            imageURL: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
            name: "Random Name #6",
            description: "Hello World!",
            imageURL: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
            name: "Random Name #7",
            description: "Hello World!",
            imageURL: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        }
    ]

    return (
        <div className="banner-container" style={{marginTop: '1vh'}}>
            {
               details.isLoading===false&&details?.data?.covers?.map((item, i) => <Item key={i} item={item} />)
            }
        </div>
    )
}

function Item(props) {
    return (
        <div style={{width: '68vw',marginBottom: '0'}} className="banner-card">
            <img alt="banner-item" src={props.item} style={{ borderRadius: "10px", width: "69vw" }} height={window.innerHeight * 0.18} />
        </div>

    )
}
export default Example