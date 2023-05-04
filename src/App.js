import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";


//Pages
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";

//Components
import NavBar from "./Components/NavBar";

const API = process.env.REACT_APP_API_URL;
console.log(API, "Testing api");

function App() {
  const [transactions, setTransactions] = useState([]);

  //get
  useEffect(() => {
      axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error("catch", e))
  }, []);

  const addTransaction = (newTransaction) => {
    axios
    .post(`${API}/transactions`, newTransaction)
    .then((response)=>{
      setTransactions([...transactions, newTransaction])
    })
    .catch((e) => console.error("catch", e))
  }

  const deleteTransaction = (index) => {
    axios
    .delete(`${API}/transactions/${index}`)
    .then((response)=>{
      const updateArray = [...transactions]
      updateArray.splice(index, 1)
      setTransactions(updateArray)
    })
    .catch((e) => console.error("catch", e))
  }

  const updateTransaction = (updatedTransaction, index) => {
    axios
    .put(`${API}/transactions/${index}`, updatedTransaction)
    .then((response)=>{
      const updateArray = [...transactions]
      updateArray[index] = updatedTransaction
      setTransactions(updateArray)
  }).catch((e) => console.error("catch", e))
}

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/transactions" element={<Index 
            transactions={transactions}/>} />

            <Route path="/transactions/new" element={<New 
            addTransaction={addTransaction}/>} />

            <Route path="/transactions/:index" element={<Show 
            transactions={transactions} 
            deleteTransaction={deleteTransaction}/>} />

            <Route path="/transactions/:index/edit" element={<Edit 
            transactions={transactions} 
            updateTransaction={updateTransaction}/>} />

            <Route path="*" element={<FourOFour />} />

          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
