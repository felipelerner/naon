import React, {useState, useEffect} from 'react'
import ItemDetail from '../../components/itemDetail/ItemDetail';



export default function ItemDetailContainer(props) {

    const [post, setPosts] = useState([]);

    useEffect(() => {
        {/*const timer = setTimeout(() =>*/} {
        fetch('https://raw.githubusercontent.com/felipelerner/sisclo/master/src/data/prueba.json')
        .then((response) => response.json())
        .then((data) => setPosts(data[3]))
      }{/*, 2000)*/};
    
      }, [])




    return (
        <div>
            <ItemDetail postInput={post}/>
        </div>
    )
}
