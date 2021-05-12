import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/itemList/ItemList'; 
import { useParams } from 'react-router';
import db from '../../data/firebaseConfig'



export default function ItemListContainer(props){

  const {category} = useParams()
  console.log(category)

  const [posts, setPosts] = useState([]);


    useEffect(() => {

      const itemCollection = db.collection("data")
      .where("category", "==", category);

        function getItems(){
          return itemCollection.get()
            .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
        }

      getItems()
        .then(data => setPosts(data))
    },[category])
 


    return (
        <div className="itemlistcontainer">
        <ItemList postsInput={posts} />
        {/*<MessageCard title = {props.greeting} />*/}
        </div>
      );
}