import React, { useState } from 'react';
import ItemCounterVisualizer from './ItemCounterVisualizer';
import 'bootstrap/dist/css/bootstrap.css';
import './ItemCounter.css';

export default function ItemCounter(props) {
  const [number, setNumber] = useState(1);
  let stock = props.stock;

  function onIncrement(){
    setNumber(number + 1);
  }

  function onDecrement(){
    setNumber(number - 1);
  }

    return(
      <div className="containerView">
        <ItemCounterVisualizer number={number} producto={props.nombre} />
        <div>
        {
          number > 1 ? <button className="btn btn-primary" onClick={onDecrement}> - </button> : 
                       <button className="btn btn-primary disabled" disabled onClick={onDecrement}> - </button>
        }
        
        {
          number < stock ? <button className="btn btn-primary" onClick={onIncrement}> + </button> : 
                           <button className="btn btn-primary disabled" disabled onClick={onIncrement}> + </button>
        }
      </div>
      <div>
        <br />
        <button className="btn btn-outline-primary">Agregar al carrito</button>  
      </div>
      </div>
    )
}