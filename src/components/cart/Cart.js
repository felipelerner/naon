import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';


export default function CartPage() {

    const {cart} = useContext(CartContext)
    

    function showcart(){
        console.log(cart)
    }

    function clear(){
    console.log('borrando cart')
    }

    function removeItem(){
    console.log(`eliminar item`)
    }


    return (
        <div className="home">
      <ul>
        {cart.map(item => {
          return <li key={item.id}>
            <p> producto: {item.title} total: {item.quantity}</p> 
            <button onClick={removeItem} className="btn btn-danger">-</button>
            <br/>
          </li>
          
        })}
        <br/>
        <button onClick={showcart} className="btn btn-success">Comprar</button>
        <br/><br/>
        <button  onClick={clear} className="btn btn-danger">Eliminar todos los productos</button>
      </ul>
      </div>
    )
}
