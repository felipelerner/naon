
import db from "../data/firebaseConfig";


export default function SendOrderService (cart, buyer, totalPrice) {

    console.log(buyer)
    console.log(cart)
    

    cart.map(order =>{
       
        console.log(order)

    })
   
        return db.collection("orders").add({
        buyer:{name: buyer.name, email: buyer.email, phone: buyer.phone},
        items:[{id:15, price:150, quantity:3, title:"title"}], total:totalPrice

        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.log("Error adding document: ", error);
        })

    }