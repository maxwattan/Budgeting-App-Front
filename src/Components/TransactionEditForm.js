// import axios from "axios";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function TransactionEditForm({updateTransaction}) {
  const navigate = useNavigate();
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
    date: "",
    category: "",
    amount: "",
    from: ""
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction(transaction, index);
    navigate(`/transactions/${index}`)
  };
  
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="Month/Date/Year"
          required
        />
       <br />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          required
          value={transaction.category}
          placeholder="Category Type: Food, Bills, Income, etc..."
          onChange={handleTextChange}
        />
<br />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="$ X.XX"
          onChange={handleTextChange}
         
        />
       
        <br />
        <label htmlFor="from">From:</label>
       <br />
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          placeholder="Name of: Person, Business, etc..."
          onChange={handleTextChange}
         
        />
        <br></br>

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Cancel!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;