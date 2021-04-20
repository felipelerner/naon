import React from 'react'
import './Item.css'
import sushi from '../../img/sushi.jpg'

export default function Item({post}) {
    return (
        
        <li className="itemCard">
            <div className ="detailImageContainer">
                <img className="detailImage" src={post.img}></img>
            </div>
            <div className ="textContainer">
                <h2 className="detailTitle">{post.title}</h2>
                <h4 className="detailDescription">{post.body}</h4>
            </div>
        </li>
    )
}
