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
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  // const handleCheckboxChange = () => {
  //   setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
  // };
//populate the edit form with data from the data base
  // after the user edits, make a put request
  // useEffect(() => {
  //   axios
  //     .get(`${API}/transactions/${index}`)
  //     .then((response) => {
  //       setTransaction(response.data)
  //     })
  //       .catch((e) => console.error(e))

  // }, [index]);


  // const updateTransaction = () => {
  //   axios
  //     .put(`${API}/transactions/${index}`, transaction)
  //     .then((response) => {
  //       setTransaction(response.data);
        // navigate(`/transactions/${index}`)
  //     }
  //     )
  //     .catch((e) => console.warn("warn", e));
  // }


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

        <input type="submit" />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Cancel!</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;