import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
// const API = process.env.REACT_APP_API_URL;

function TransactionNewForm({addTransaction}) {
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: "",
    category: "",
    amount: "",
    from: "",
  });
  

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  // const addBookmark = (newBookmark) => {
  //   axios
  //     .post(`${API}/bookmarks`, newBookmark)
  //     .then(() => {
  //       navigate('/bookmarks');
  //     }).catch((c) => console.error("catch", c))
  // }


  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction)
    navigate(`/transactions`)
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date"> Date: </label>
        <br />
        <input
          id="date"
          value={transaction.date}
          type="getDate()"
          onChange={handleTextChange}
          placeholder="Month/Date/Year"
          required
        />
       <br /><br />
        <label htmlFor="category"> Category: </label>
        <br />
        <input
          id="category"
          type="text"
          required
          value={transaction.category}
          placeholder= "Food, Bills, Income, etc..."
          onChange={handleTextChange}
        />
<br /><br />
        <label htmlFor="amount"> Amount: </label>
        <br />
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="$ X.XX"
          onChange={handleTextChange}
        />
       
       <br /><br />
       <label htmlFor="from"> From:</label>
       <br />
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          placeholder="Name of: Person, Business, etc..."
          onChange={handleTextChange}
         
        />
        <br /><br />

        <input type="submit" />
      </form>
      <br />
      <Link to={`/`}>
        <button>Cancel!</button>
      </Link>
    </div>
  );
}

export default TransactionNewForm;