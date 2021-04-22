import React from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailList({postInput}) {



    return (
        <div>
            {console.log(postInput)}
            <ItemDetail key={postInput.id} post={postInput} />
        </div>
    )
}
