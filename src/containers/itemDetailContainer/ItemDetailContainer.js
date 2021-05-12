import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import db from '../../data/firebaseConfig'


export default function ItemDetailContainer() {

   
    const {id} = useParams()
    console.log(id)
    
    
    const [post, setPosts] = useState([]);



      useEffect(() => {

        const parsedId = parseInt(id)
        
        const itemCollection = db.collection("data")
        .where("id", "==", parsedId);

        function getItems(){
          return itemCollection.get()
            .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
        }

        getItems()
          .then(data => {
            console.log(data[0])
            setPosts(data[0])})
      },[id])


    return (
        <div>
            <ItemDetail postInput={post}/>
        </div>
    )
}
