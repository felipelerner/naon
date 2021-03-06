import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom'
import './Cart.css'



export default function CartPage() {

    const {cart, clear, removeItem, sumaPrecios} = useContext(CartContext);
  
    let history = useHistory()

    function handleToHome(){
      history.push('/')
    }

    function handleToBuy(){
      history.push('/cart/buy')
    }

  
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
        <div className="emptyCart">
        <p>No elegiste ningún producto.</p> <br/> <button onClick={() => handleToHome()} className="btn btn-success">Volver al home</button>
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
                      return(
                      <CartWithItems key={item.id}  id={item.id} product={item.title} quantity={item.quantity} priceByProduct={precioPorProducto} price={item.price}/>
                      )})}
              </ul>
          </div>
          <div className="priceControlersContainer">
            <p>${sumaPrecios} </p>
            {!cart.length ? <button className="buy btn btn-success" disabled>Comprar</button> : 
            <button  onClick={() => handleToBuy()} className="buy btn btn-success">Comprar</button>}
            <br/><br/>
            {!cart.length ?  <button className="btn btn-danger" disabled>Eliminar todos los productos</button> : 
            <button onClick={clear} className="btn btn-danger">Eliminar todos los productos</button>}
          </div>
        </div>
      </div>
    )
}
