import React from 'react';
import Item from '../item/Item';
import './ItemList.css';

export default function ItemList({postsInput}) {
    return (
        <div className="itemlistcontainer">
            <ul>
                {
                    postsInput.map((post) => {
                        return(
                            <Item key={post.id} post={post} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
