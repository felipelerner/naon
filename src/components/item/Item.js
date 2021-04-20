import React from 'react'
import './Item.css'
import sushi from '../../img/sushi.jpg'

export default function Item({post}) {
    return (
        
        <li className="itemCard">
            <div className ="detailImageContainer">
                <img className="detailImage" src='http://www.hikaru.com.ar/images/menu-delivery/rolls-clas-california.jpg'></img>
            </div>
            <div className ="textContainer">
                <h2 className="detailTitle">{post.title}</h2>
                <h4 className="detailDescription">lorem ipsum dolor quentu stolarz mathias lorem ipsum dolor quentu stolarz mathias  lorem ipsum dolor quentu stolarz mathias  </h4>
            </div>
        </li>
    )
}
