import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import "firebase/firestore";
import SendOrderService from '../../services/orderServices';
import './BuyForm.css'


export default function BuyForm() {



    const {cart, sumaPrecios} = useContext(CartContext)
    const [ docRef, setDocRef ] = useState('')
    const [formData, setFormData] = useState({  name:'',
                                                email:'',
                                                phone:'' })



    const handleInputChange = (event) => {
            setFormData({
                ...formData,
                [event.target.name] : event.target.value
    })}


    function sendOrder() {
        console.log(formData)

        SendOrderService(cart, formData, sumaPrecios)
            .then(res => setDocRef(res),
  
            
        );
        console.log(docRef)
    }

    
    return (
        <div className="buyFormContainer">
          <div className="buyDetail">
              
                  <h2>estás comprando</h2>
                    {
                        cart.map(item =>{

                            return(
                            <p key={item.id}>{item.quantity} - {item.title} </p>
                            )
                        })
                    }
                <p>total: {sumaPrecios}</p>
              
                <form>
                    <label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="name"  placeholder="Nombre y Apellido" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="email"  placeholder="Mail" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="phone"  placeholder="Telefono" /> 
                        <br/>
                    </label>
                    {/* <input type="submit" value="Finalizar compra" /> */}
                </form>
                <button className='buybtn btn btn-success' onClick={() => sendOrder()}>Finalizar Compra</button>
          </div>
        </div>
    )}


                


