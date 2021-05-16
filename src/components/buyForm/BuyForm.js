import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import "firebase/firestore";
import SendOrderService from '../../services/orderServices'



export default function BuyForm() {

    const {cart, sumaPrecios} = useContext(CartContext)
    // const hardcodedBuyerData = {name: "Pepe", email: "pepe@pepe.com", phone: "55555555"};
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
            console.log(docRef)
        );
     }


    return (
        <div className="home">
          <div className="cartDetail">
              <div>
                  <h2>estás comprando</h2>
                    {
                        cart.map(item =>{

                            return(
                            <p key={item.id}>{item.quantity} - {item.title} </p>
                            )
                        })
                    }
                <p>total: {sumaPrecios}</p>
              </div>
                <form>
                    <label>
                        <input type="text" className="form-control" onChange={handleInputChange} name="name"  placeholder="Nombre y Apellido" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="email"  placeholder="Mail" /> 
                        <br/>
                        <input type="text" className="form-control" onChange={handleInputChange} name="phone"  placeholder="Telefono" /> 
                        <br/>
                    </label>
                    <input type="submit" value="Finalizar compra" />
                </form>
                <button onClick={() => sendOrder()}>ver</button>
          </div>
        </div>
    )}


                


