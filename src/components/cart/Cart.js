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
  
    function CartWithItems({id, product, quantity, priceByProduct, price}){
      return (
        <li key={id}>
        <p> producto: {product} unidades: {quantity} subtotal: ${quantity > 1 ?  priceByProduct : price}</p> 
        <button>+</button>
        <br/>
        <button onClick={() =>removeItem(id)} className="btn btn-danger">Remover Item</button>
        <br/>
      </li>
      )
    }
    
    function CartWithoutItems(){
      return (
        <p>No elegiste ningun item</p>
      )
    }

    function ItemIn({id, product, quantity, priceByProduct, price}){
      if(id){
        return <CartWithItems id={id} product={product} quantity={quantity} priceByProduct={priceByProduct} price={price} />;
      }
      return <CartWithoutItems/>;
    }
      

    
    return (
        <div className="home">
        <ul>
          {cart.map(item =>{ 
            const precioPorProducto = (item.price * item.quantity)
            console.log (precioPorProducto)
          return(
              <div>
                <ItemIn id={item.id} product={item.title} quantity={item.quantity} priceByProduct={precioPorProducto} price={item.price}/>
            </div>
          )})}
        

        <br/>
        <p>Precio total:{sumaPrecios} </p>
        <button onClick={showcart} className="btn btn-success">Comprar</button>
        <br/><br/>
        <button  onClick={clear} className="btn btn-danger">Eliminar todos los productos</button>
      </ul>
      </div>
    )
}
