import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import TransactionDetails from "../Components/TransactionDetails"

function Show({deleteTransaction, transactions}) {
  const {index} = useParams()
  const [transaction] = useState(transactions[index])
  return (
    <div className='Show'>
        <h2>Show</h2>
        <TransactionDetails 
        transaction={transaction}
        index={index}
        deleteTransaction={deleteTransaction}/>
    </div>
  )
}

export default Show