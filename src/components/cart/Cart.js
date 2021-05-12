import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom'
import './Cart.css'




export default function CartPage() {
  
    let history = useHistory()

    function handleClick(){
      history.push('/')
    }

    const {cart, clear, removeItem, sumaCantidad} = useContext(CartContext)


    function showcart(){
      console.log(cart)
      console.log(sumaCantidad)
    }

    const precio = cart.map(item =>
     (item.price * item.quantity))   
    
    const sumaPrecios = precio.reduce((prev, next) => prev + next, 0);
  
    function CartWithItems({id, product, quantity, priceByProduct, price}){
      return (
        <div className="itemSelected">
          <li>
            <button onClick={() =>removeItem(id)} className="btn btn-danger">-</button>
            <h1> {product} </h1>
            <p className="itemQuantity"> X{quantity} </p>
            <p> ${quantity > 1 ?  priceByProduct : price}</p>
            <br/>
          </li>
        </div>
      )
    }
    
    function CartWithoutItems(){
      return (
        <div>
        <p>No elegiste ningun item</p><button onClick={() => handleClick()} className="btn btn-light">Volver al home</button>
        </div>
      )
    }

    
    return (
        <div className="home">
          <div className="cartDetail">
            <div className='itemSelectedContainer'>
              <ul>
                {!cart.length ? <CartWithoutItems/> : 
                      cart.map(item =>{ 
                        const precioPorProducto = (item.price * item.quantity)
                        console.log (precioPorProducto)
                      return(
                      <CartWithItems key={item.id}  id={item.id} product={item.title} quantity={item.quantity} priceByProduct={precioPorProducto} price={item.price}/>
                      )})}
              </ul>
          </div>
          <div className="priceControlersContainer">
            <p>${sumaPrecios} </p>
            <button onClick={showcart} className="buy btn btn-success">Comprar</button>
            <br/><br/>
            <button  onClick={clear} className="btn btn-danger">Eliminar todos los productos</button>
          </div>
        </div>
      </div>
    )
}
