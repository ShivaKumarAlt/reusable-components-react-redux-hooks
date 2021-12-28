import React from 'react'
import Button from './reusable/Button'
import Item from './reusable/Item'
import './main.css'
export default function Main() {
  let data = [
    {
      date: "June 26, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 25, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 29, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 26, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 25, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 29, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 26, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 25, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    },
    {
      date: "June 29, 2017 5:59 PM",
      toAddress: "To Address",
      money: "-0.1 EEUR",
      convert: "25 USD"
    }
  ]


  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  return (
    <div>
      <div className="d-flex row">
      <Button title="Send EEUR" />
      <Button title="Sell EEUR" />
      <Button title="Buy EEUR" />
      </div>
      {PRODUCTS !== undefined && PRODUCTS.length > 0 && PRODUCTS.map((PRODUCTS, index) => (
        <Item {...PRODUCTS} index={index}/>
      ))}

      <Button title="All Transactions" />
    </div>
  )
}
