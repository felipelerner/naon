import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';


export default function CartPage() {

    const cart = useContext(CartContext)
    function showcart(){
        console.log(cart)
    }

    return (
        <div className="home">
      <ul>
        {cart.cart.map(item => {
          return <li key={item.id}>
            <span> producto: {item.title}</span>
            <span> total: {item.quantity}</span>
          </li>
        })}
        <br/>
        <button onClick={showcart} className="btn btn-primary">Comprar</button>
      </ul>
      </div>
    )
}
