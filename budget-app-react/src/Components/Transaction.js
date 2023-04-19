import React from 'react'
import {Link} from "react-router-dom"

function Transaction({transaction, index}) {
  return (
    <div>
        <h2>Transaction</h2>
        <p>{transaction.date}</p>
        <Link to={`/transactions/${index}`}>{transaction.category}</Link>
        <p>{transaction.amount}</p>
        <Link to={`/transactions/${index}`}></Link>
    </div>
  )
}

export default Transaction