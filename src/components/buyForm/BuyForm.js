import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import "firebase/firestore";
import SendOrderService from '../../services/orderServices';
import './BuyForm.css'
import { useHistory } from 'react-router';


export default function BuyForm() {

    let history = useHistory()
    const {cart, sumaPrecios, clear} = useContext(CartContext)
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
        SendOrderService(cart, formData, sumaPrecios)
            .then(res =>{ 
            setDocRef(res)
            clear()
        });
    }

    function backToHome(){
        history.push("/")
    }

     
    return (
        <div className="buyFormContainer">
          <div className="buyDetail">
              
          { !docRef ? <div className="detailContainer"> <h2>Estás comprando</h2> 
                    {
                        cart.map(item =>{

                            return(
                            <span key={item.id}>{item.quantity} - {item.title} </span>
                            )
                        })
                    }
                <p>Total: ${sumaPrecios}</p>
              
                <form>
                    <label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="name"  placeholder="Nombre y Apellido" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="email"  placeholder="Mail" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="phone"  placeholder="Telefono" /> 
                        <br/>
                    </label>
                </form>
                    <button
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className='buybtn btn btn-success' onClick={() => sendOrder()}>Finalizar Compra</button> </div> : 
                <div className= "succesDiv">
                    <h2> ¡Compra completada! </h2>
                    <p> Tu compra se generó con el id <strong>{docRef}</strong> </p>
                    <button className="backHomeBtn btn btn-success" onClick={() => backToHome()}>Volver al home</button>
                </div>
                }
          </div>
        </div>
    )}


                


