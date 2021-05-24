import React from 'react'
import ItemCounter from '../itemCounter/ItemCounter'
import './ItemDetail.css'
import { useHistory } from 'react-router-dom'


export default function ItemDetail({postInput}) {

    let history = useHistory()

    const category = postInput.category
    const stock = postInput.stock
    const id = postInput.id
    const title = postInput.title
    const price = postInput.price

    function backToBuy(){
        history.push(`/itemlist/${category}`)
    }

    return (
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <div className ="itemDetailImageContainer">
                    <img className="itemDetailImage" src={postInput.img} alt={`producto ${postInput.title}`} ></img>
                    <button className='backbtn btn btn-success' onClick={() => backToBuy()} >Seguir comprando</button>
                </div>
                <div className="texCounterContainer" >
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
                        <ItemCounter title={title} id={id} nombre={category} stock={stock} initial={1} price={price} />
                    </div>
                </div>
            </div>
        </div>
    )
}
