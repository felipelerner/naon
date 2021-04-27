import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export default function Item({post}) {
    return (
        <Link to ={`/itemdetail/${post.id}`}style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <li className="itemCard">
            <div className ="detailImageContainer">
                <img className="detailImage" src={post.img} alt={`producto ${post.title}`}></img>
            </div>
            <div className ="textContainer">
                <h2 className="detailTitle">{post.title}</h2>
                <h4 className="detailDescription">{post.body}</h4>
            </div>
        </li>
         </Link>
    )
}