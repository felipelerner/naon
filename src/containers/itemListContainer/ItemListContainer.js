import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import MessageCard from '../../components/messageCard/MessageCard';
import ItemList from '../../components/itemList/ItemList'; 

export default function ItemListContainer(props){

  const [posts, setPosts] = useState([]);



 
    useEffect(() => {
      {/*const timer = setTimeout(() =>*/} {
      fetch('https://raw.githubusercontent.com/felipelerner/sisclo/master/src/components/data/prueba.json')
      .then((response) => response.json())
      .then((data) => setPosts(data))
    }{/*, 2000)*/};
  
    }, [])
  


    return (
        <div className="itemlistcontainer">
        <ItemList postsInput={posts} />
        {/*<MessageCard title = {props.greeting} />*/}
        </div>
      );
}