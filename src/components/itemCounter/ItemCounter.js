import React, { useState } from 'react';
import ItemCounterVisualizer from './ItemCounterVisualizer';
import 'bootstrap/dist/css/bootstrap.css';
import './ItemCounter.css';
import { Link } from 'react-router-dom'


export default function ItemCounter ({nombre, stock, initial}){

  const [number, setNumber] = useState(initial);

  function onIncrement(){
    setNumber(number + 1);
  }

  function onDecrement(){
    setNumber(number - 1);
  }

    return(
      <div className="containerView">
        <div className="visualizerContainer">
          <ItemCounterVisualizer number={number} producto={nombre} />
        </div>
        <div>
        {
          number > 1 ? <button className="counterBtn btn btn-primary" onClick={onDecrement}> - </button> : 
                       <button className="counterBtn btn btn-primary disabled" disabled onClick={onDecrement}> - </button>
        }
        
        {
          number < stock ? <button className="counterBtn btn btn-primary" onClick={onIncrement}> + </button> : 
                           <button className="counterBtn btn btn-primary disabled" disabled onClick={onIncrement}> + </button>
        }
      </div>
      <div>
        {
          number < stock ? null : <div>
                                    <br /><Link to  ={`/cart`}>
                                    <button className="prueba btn btn-outline-primary">Terminar Compra</button> 
                                    </Link>
                                  </div>
        } 
      </div>
      </div>
    )
}