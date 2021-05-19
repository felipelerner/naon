import db from "../data/firebaseConfig";


export default function SendOrderService (cart, buyer, totalPrice) {


    console.log(buyer)
    console.log(cart)    
   
        return db.collection("orders").add({
        buyer:{name: buyer.name, email: buyer.email, phone: buyer.phone},
        items:cart, total:totalPrice,
        date: Date()

        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            return docRef.id
            

        })
        .catch(function(error) {
            console.log("Error adding document: ", error);
        })
        
    }