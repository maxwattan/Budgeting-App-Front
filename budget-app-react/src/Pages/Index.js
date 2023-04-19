import React from 'react'
import Transactions from "../Components/Transactions.js"

function Index({transactions}) {
  return (
    <div className='Index'>
        <h2>Index</h2>
        <Transactions transactions={{transactions}}/>
    </div>
  )
}

export default Index;