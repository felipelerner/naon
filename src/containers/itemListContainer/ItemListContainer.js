import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/itemList/ItemList'; 
import { useParams } from 'react-router';

export default function ItemListContainer(props){

  const {category} = useParams()
  console.log(category)

  const [posts, setPosts] = useState([]);
  
  const filterCategory = (posts) => {
    return posts.category == category;
  };

    useEffect(() => {

      fetch('https://raw.githubusercontent.com/felipelerner/sisclo/master/src/data/prueba.json')
      .then((response) => response.json())
      .then((data) => setPosts(data.filter(filterCategory)));
      
  
    }, [category])
  


    return (
        <div className="itemlistcontainer">
        <ItemList postsInput={posts} />
        {/*<MessageCard title = {props.greeting} />*/}
        </div>
      );
}