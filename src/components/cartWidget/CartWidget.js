import React, { useContext } from 'react';
import './CartWidget.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../../context/CartContext';
import { useHistory } from 'react-router-dom'


export default function CartWidget(){

    const {sumaCantidad} = useContext(CartContext)

    let history = useHistory()

    function handleToCart() {
      history.push("/cart");
    }


    return(
    <div>
        {sumaCantidad > 0 ? <div>
            <div className="popCart"> {sumaCantidad} </div>
            <ShoppingCartOutlinedIcon   onClick={handleToCart}  fontSize="large" className="cartWithPop" />
        </div> : <ShoppingCartOutlinedIcon  onClick={handleToCart}  fontSize="large" className="cart" />} 
    </div>
    )
    
}