import React, {useState, useEffect} from 'react'
import ItemDetailList from '../../components/itemDetail/ItemDetailList';

export default function ItemDetailContainer(props) {

    const [post, setPosts] = useState([]);

    useEffect(() => {
        {/*const timer = setTimeout(() =>*/} {
        fetch('https://raw.githubusercontent.com/felipelerner/sisclo/master/src/data/prueba.json')
        .then((response) => response.json())
        .then((data) => setPosts(data[0]))
      }{/*, 2000)*/};
    
      }, [])




    return (
        <div>
            <ItemDetailList postInput={post}/>
        </div>
    )
}
