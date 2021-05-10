import React, { useState } from 'react';
import { createContext } from 'react';


export const CartContext = createContext([])


export function CartProvider(props){

    const [cart, setCart] = useState([])

    function isCurrentlyInCart (id) {
        return cart.some(item => item.id === id)
      }

    
      function setCartItem({id, title, quantity, price, totalPrice, totalProducts}) {
        const isInCart = isCurrentlyInCart(id)
        if (isInCart) {
          const newToCart = cart.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: quantity + item.quantity,
                price: price,
                totalPrice: (item.price * item.quantity),
                totalProducts: (item.quantity + item.quantity) 
              }
            }
            return item
          })
          return setCart([...newToCart])
        }
        setCart([...cart, {id, title, quantity, price, totalPrice, totalProducts}])
    }

    function clear(){
      console.log('borrando cart')
      setCart([])
    }

    
    function removeItem(id) {
      const newToCart = cart.filter((item) => item.id !== id);
      setCart(newToCart);
      console.log(`eliminar item id ${id}`)
    }

    // function calculadora() {

    //   const precio = cart.map(item =>
    //     (item.price * item.quantity))   
       
    //   const sumaPrecios = precio.reduce((prev, next) => prev + next, 0);

    //   return sumaPrecios
    
    // }



    return <CartContext.Provider value={{setCartItem, setCart, clear, removeItem, cart}}{...props} /> 
    
}



