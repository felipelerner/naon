import React, { useContext } from 'react';
import './CartWidget.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../../context/CartContext';


export default function CartWidget(){

    const {cart} = useContext(CartContext)

    const itemsInCart = cart.map(item => 
        (item.quantity))

    const totalItems = (itemsInCart)

    return(
    <div>
        {itemsInCart > 0 ? <div>
            <div className="popCart"> {totalItems} </div>
            <ShoppingCartOutlinedIcon fontSize="large" className="cartWithPop" />
        </div> : <ShoppingCartOutlinedIcon fontSize="large" className="cart" />} 

    </div>
    )
    
}