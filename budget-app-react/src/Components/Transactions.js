import Transaction from "./Transaction"

function Transactions({transactions}) {
  //bucket accumulate
    let total = 0
    for (let i = 0; i < transactions.length; i++){
        total = total + Number(transactions[i].amount)
    }
    function getColor(total) {
      let color = "";
      if (total > 100) {
        color = "green";
      } else if (total >= 0 && total <= 100) {
        color = "yellow";
      } else {
        color = "red";
      }
      return color;
    }

    
    return (
      <div>
        <h1>Transactions</h1>
        <p>Bank Account Total: $
          <span style={{ color: getColor(total) }}>{total}</span>
        </p>
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
                return <Transaction key={index} transaction={transaction} index={index} total={total}/>;
            })}
          </tbody>
        </table>
      </section>
    </div>
      </div>
  );
}


export default Transactions;