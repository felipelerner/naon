import React from 'react'
import ItemCounter from '../itemCounter/ItemCounter'
import './ItemDetail.css'

export default function ItemDetail({postInput}) {

    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <div className ="itemDetailImageContainer">
                    <img className="itemDetailImage" src={postInput.img}></img>
                </div>
                <div className="texCounterContainer">
                    <div className ="textDetailContainer">
                        <h2 className="itemDetailTitle"> {postInput.title} </h2>
                        <h4 className="itemDetailDescription"> {postInput.body}</h4>
                        <div className="itemDetailPrice">
                        <h4>1 roll (8 piezas) ${postInput.price}</h4>
                        </div>
                    </div>
                    <div className="itemDetailCounterContainer">
                        <ItemCounter nombre={"roll"} stock={"10"} initial={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
