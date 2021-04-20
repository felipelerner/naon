import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import MessageCard from '../messageCard/MessageCard';
import ItemList from '../itemList/ItemList'; 

export default function ItemListContainer(props){

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data))

  }, [])

    return (
        <div className="itemlistcontainer">
        <ItemList postsInput={posts} />
        {/*<MessageCard title = {props.greeting} />*/}
        </div>
      );
}