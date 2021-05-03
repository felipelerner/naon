import React, { useState, useMemo } from 'react';
import { createContext } from 'react';


export const CartContext = createContext([])


export function CartProvider(props){

    const [cart, setCart] = useState([])

    function isCurrentlyInCart (id) {
        return cart.some(item => item.id === id)
      }
    
      function setCartItem({id, title, quantity}) {
        const isInCart = isCurrentlyInCart(id)
        if (isInCart) {
          const newToCart = cart.map(item => {
            if (item.id === id) {
              return {
                ...item,
                quantity: quantity + item.quantity
              }
            }
          })
          return setCart([...newToCart])
        }
        setCart([...cart, {id, title, quantity}])
    }

    const value = useMemo(()=>{
        return({
            setCartItem,
            cart
        })
    },[setCartItem, cart])

    return <CartContext.Provider value={value}{...props} /> 
    
}

export function useCart(){
    const context = React.useContext(CartContext);
    if(!context){
        throw new Error ('useCart debe estar dentro del provider')
    }

    return context;
}
