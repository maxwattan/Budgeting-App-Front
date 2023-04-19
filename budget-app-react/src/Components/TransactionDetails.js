import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TransactionDetails(transactions) {
  let navigate = useNavigate()
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data)
      }).catch(() => {
        navigate("/not-found")
      })
  }, [index, navigate]);
  
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate(`/transactions`)
      })
    .catch((e) => console.error(e))
   };
  
  return (
    <article>
      <h3>Date: {transaction.date}</h3>
      <h3>Category:{transaction.category}</h3>
      <h3>Amount:{transaction.amount}</h3>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div><br />
    
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div><br />
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;