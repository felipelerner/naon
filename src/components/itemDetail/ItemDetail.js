import React from 'react'
import ItemCounter from '../itemCounter/ItemCounter'
import './ItemDetail.css'

export default function ItemDetail({postInput}) {

    const category = postInput.category
    const stock = postInput.stock


    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <div className ="itemDetailImageContainer">
                    <img className="itemDetailImage" src={postInput.img} alt={`producto ${postInput.title}`} ></img>
                </div>
                <div className="texCounterContainer">
                    <div className ="textDetailContainer">
                        <h2 className="itemDetailTitle"> {postInput.title} </h2>
                        <h4 className="itemDetailDescription"> {postInput.body}</h4>
                        <div className="itemDetailPrice">
                            {
                                category === "roll" ? <h4>1 roll (8 piezas) ${postInput.price}</h4> :
                                                    <h4>1 tabla ${postInput.price}</h4>
                            }
                        </div>
                    </div>
                    <div className="itemDetailCounterContainer">
                        <ItemCounter nombre={category} stock={stock} initial={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
