
function Transactions({transactions}) {
    let total = 0
    for (let i = 0; i < transactions.length; i++){
        total = total + Number(transactions[i].amount)
    }

    
    return (
        <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Categories</th>
              <th>Amount $</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
                return <transactions key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}


export default Transactions;