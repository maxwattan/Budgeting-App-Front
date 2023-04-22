import React from 'react'
import {Link} from "react-router-dom"

function Transaction({transaction, index}) {
  return (
    
      <tr>
        
        <td>

        <p>{transaction.date}</p>
        </td>
        <td>

          <p>{transaction.from}</p>
        </td>

        <td>
    
        <p>{transaction.category}</p>

        </td>

        <td>
        <p>{transaction.amount}</p>
        </td>

        <td>
          <Link to ={`/transactions/${index}`}> edit </Link>
        </td>
      </tr>
     
    
  )
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td

export default Transaction