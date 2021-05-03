import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../../components/itemDetail/ItemDetail';



export default function ItemDetailContainer() {

   
    const {id} = useParams()
    console.log(id)
    
    const [post, setPosts] = useState([]);

    

  

    useEffect(() => {

      const isItemId = (post) => {

        const parsedId = parseInt(id)
        
        return post.id === parsedId;

      };

        fetch('https://raw.githubusercontent.com/felipelerner/sisclo/master/src/data/prueba.json')
        .then((response) => response.json())
        .then((data) => setPosts(data.find(isItemId)));

      }, [id])

    return (
        <div>
            <ItemDetail postInput={post}/>
        </div>
    )
}
