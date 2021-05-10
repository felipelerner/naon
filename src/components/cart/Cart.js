import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';



export default function CartPage() {

    const {cart, clear, removeItem} = useContext(CartContext)

    function showcart(){
      console.log(cart)
    }

       

    const precio = cart.map(item =>
     (item.price * item.quantity))   
    
    const sumaPrecios = precio.reduce((prev, next) => prev + next, 0);
  
      

    
    return (
        <div className="home">
        <ul>

          {cart.map(item => {
            const precioPorProducto = (item.price * item.quantity)
            console.log (precioPorProducto)
            return (
              <li key={item.id}>
              <p> producto: {item.title} unidades: {item.quantity} subtotal: ${item.quantity > 1 ?  precioPorProducto : item.price}</p> 
              <button onClick={() =>removeItem(item.id)} className="btn btn-danger">-</button>
              <br/>
            </li>
            )

          })}

        <br/>
        <p>Precio total:{sumaPrecios} </p>
        <button onClick={showcart} className="btn btn-success">Comprar</button>
        <br/><br/>
        <button  onClick={clear} className="btn btn-danger">Eliminar todos los productos</button>
      </ul>
      </div>
    )
}
