import React, { useState, useContext } from 'react';
import ItemCounterVisualizer from './ItemCounterVisualizer';
import 'bootstrap/dist/css/bootstrap.css';
import './ItemCounter.css';
import { useHistory } from "react-router-dom";
import { CartContext } from '../../context/CartContext';


export default function ItemCounter ({title, nombre, stock, initial, id, price}){

  let history = useHistory();

  const {cart, setCartItem} = useContext(CartContext)  
  const [number, setNumber] = useState(initial);
  const [showFinishButton, setShowFinishButton] = useState(false);


  function onIncrement(){
    setNumber(number + 1);
  }

  function onDecrement(){
    setNumber(number - 1);
  }

  function onAdd(){
    setCartItem({id: id, quantity: number, title: title, price: price, stock:stock})
    setShowFinishButton(true)
  }

  function toCart(){
    history.push("/cart");
    console.log(cart)
  }

    return(
      <div className="containerView">
        <ItemCounterVisualizer number={number} producto={nombre} />
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
        <button onClick={onAdd} className="btn btn-outline-primary">Agregar al carrito</button>  
        <br /><br />
        { showFinishButton ? <button onClick={toCart} className="btn btn-outline-primary">Finalizar compra</button> : null}
      </div>
      </div>
    )

}
