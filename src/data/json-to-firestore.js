
// Required for side-effects
import "firebase/firestore";


// Initialize Cloud Firestore through Firebase
initializeApp({
    apiKey: "AIzaSyDjxdFuJ3XF13mrGzAyKPLfkiZ-xIZXoKc",
    authDomain: "sushi-ecommerce-973c1.firebaseapp.com",
    projectId: "sushi-ecommerce-973c1",
    storageBucket: "sushi-ecommerce-973c1.appspot.com",
    messagingSenderId: "447761531149",
    appId: "1:447761531149:web:a99d0790b6bc1866c13044",
    measurementId: "G-KCE1V582B0"
  });
  
var db = firestore();

var data = [
    {
        "id":1,
        "title": "California",
        "body": "Kanikama, palta y phila cubierto en sésamo rubio.",
        "price":"600",
        "stock":"10",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384122/big.jpg",
        "category": "roll"
    },
    {
        "id":2,
        "title": "Buenos Aires",
        "body": "Salmón, palta y phila cubierto en salmón bañado en sésamo rubio.",
        "price":"660",
        "stock":"7",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384130/big.jpg",
        "category": "roll"
    },
    {
        "id":3,
        "title": "Spring",
        "body": "Langostino, palta y phila cubierto en verdeo.",
        "price":"540",
        "stock":"5",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384131/big.jpg",
        "category": "roll"
    },
    {
        "id":4,
        "title": "Tamago",
        "body": "Salmón, palta y phila envuelto en tamago.",
        "price":"590",
        "stock":"9",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384132/big.jpg",
        "category": "roll"
    },
    {
        "id":5,
        "title": "Sake",
        "body": "Salmón cocido con miel cubierto con hilos de batata.",
        "price":"620",
        "stock":"11",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384134/big.jpg",
        "category": "roll"
    },
    {
        "id":6,
        "title": "Smoked",
        "body": "Salmón ahumado, palta y phila cubierto en sésamo mixto.",
        "price":"680",
        "stock":"3",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384135/big.jpg",
        "category": "roll"
    },
    {
        "id":7,
        "title": "Golden",
        "body": "Palta y phila cubierto en salmón.",
        "price":"700",
        "stock":"8",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384136/big.jpg",
        "category": "roll"
    },
    {
        "id":8,
        "title": "Salmón X20",
        "body": "3 Sashimis de salmón, 2 Niguiris de salmón, 5 Maki S.P.F, 5 New York, 5 Rain.",
        "price":"1200",
        "stock":"2",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384094/big.jpg",
        "category": "tabla"
    },
    {
        "id":9,
        "title": "Salmón X30",
        "body": "5 Sashimis de salmón, 5 Niguiris de salmón, 5 New York, 10 Rain, 5 Maki S.P.F.",
        "price":"1600",
        "stock":"3",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384095/big.jpg",
        "category": "tabla"
    },
    {
        "id":10,
        "title": "Omakase X20",
        "body": "3 Niguiris de salmón, 2 Geishas de salmón, 5 Sake, 5 Rain, 5 Spring.",
        "price":"1200",
        "stock":"3",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384099/big.jpg",
        "category": "tabla"
    },
    {
        "id":11,
        "title": "Kohlanta X40",
        "body": "5 Citric, 10 Tequila, 5 Tropic, 10 Oishi, 10 Feeling.",
        "price":"2100",
        "stock":"2",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384100/big.jpg",
        "category": "tabla"
    },
    {
        "id":12,
        "title": "Rainbow X35",
        "body": "5 Sem, 5 Sashimis de salmón, 5 Geishas de salmón, 5 Philadelphia, 5 Niguiris de salmón, 10 Buenos Aires",
        "price":"1700",
        "stock":"2",
        "img": "https://pedidos.masdelivery.com/panel/images/dishes/1253/384102/big.jpg",
        "category": "tabla"
    }

]


data.forEach(function(obj){
    db.collection("data").add({
        id: obj.id,
        title: obj.title,
        body: obj.body,
        price: obj.price,
        stock: obj.stock,
        img: obj.img,
        category: obj.category
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})
