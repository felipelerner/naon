import React from 'react'
import ItemCounter from './ItemCounter';

export default function ItemCounterContainer(props) {
    return (
        <div className="itemlistcontainer">
            <ItemCounter nombre = {props.nombre} stock = {props.stock} initial ={props.initial}/>
        </div>
    )
}
