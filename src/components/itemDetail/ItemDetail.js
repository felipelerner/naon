import React from 'react'
import Sushi from '../../img/sushi.jpg'
import ItemCounter from '../itemCounter/ItemCounter'
import './ItemDetail.css'

export default function ItemDetail({post}) {

    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <div className ="itemDetailImageContainer">
                    <img className="itemDetailImage" src={post.img}></img>
                </div>
                <div className="texCounterContainer">
                    <div className ="textDetailContainer">
                        <h2 className="itemDetailTitle"> {post.title} </h2>
                        <h4 className="itemDetailDescription"> {post.body}</h4>
                        <div className="itemDetailPrice">
                        <h4>1 roll (8 piezas) {post.price}</h4>
                        </div>
                    </div>
                    <div className="itemDetailCounterContainer">
                        <ItemCounter nombre={"roll"} stock={"10"} initial={"1"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
