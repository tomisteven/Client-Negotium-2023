import React from 'react'
import './newItemDash.css'


export default function NewItemDash({title, color, img}) {
  return (
    <div className='new-item-dash'>
        <img src={img} alt=""/>
        <h6>{title}</h6>
        <p style={{
            backgroundColor: color,
        }}>12</p>
    </div>
  )
}
