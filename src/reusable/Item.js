import React from 'react'
import './item-style.css'
export default function Item({category,price,stocked,name,date, toAddress, money, convert,index }) {
  return (
    <div>{
      stocked!== undefined && stocked=== false ? (
        <li key={index}>
        <span>{category}</span>
        <span>{name}</span>
        <span className="money">{price}<br />
          <small>{convert}</small></span>
      </li>
      ) : (   <li key={index}>
        <span>{category}</span>
        <span>{name}</span>
        <span style={{color: "green"}}>{price}<br />
          <small>{convert}</small></span>
      </li>)
   
}</div>
  )
}
