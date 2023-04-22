import Transaction from "./Transaction"
import logo from "./logo.png"

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
        <h1 className="total">Bank Account Total:  
        </h1>
        <br></br>
          <span style={{ color: getColor(total) }}> $ / <img src={logo} alt="logo" width="30px"></img> {total} </span>
          <br></br>
          <br></br>
        <h1>Transactions</h1>
          <br></br>
        
        <div className="Transactions">
          <br></br>
      <section>
        <table>
          <thead>
            <tr>
              <th> Date </th>
              <th> From </th>
              <th> Categories </th>
              <th> Amount $/<img classname="amount-img" src={logo} alt="logo" width="25px"></img>  </th>
              <th> Edit </th>
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