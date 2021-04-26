import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import MessageCard from '../../components/messageCard/MessageCard';
import ItemList from '../../components/itemList/ItemList'; 
import { useParams } from 'react-router';

export default function ItemListContainer(props){

  const {category} = useParams()
  console.log(category)

  const [posts, setPosts] = useState([]);
  let filteredPost =posts.filter(post => post.category == category);



 
    useEffect(() => {
      {/*const timer = setTimeout(() =>*/} {
      fetch('https://raw.githubusercontent.com/felipelerner/sisclo/master/src/data/prueba.json')
      .then((response) => response.json())
      .then((data) => setPosts(data))
    }{/*, 2000)*/};
  
    }, [])
  


    return (
        <div className="itemlistcontainer">
        <ItemList postsInput={filteredPost} />
        {/*<MessageCard title = {props.greeting} />*/}
        </div>
      );
}