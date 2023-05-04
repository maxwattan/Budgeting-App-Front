import TransactionEditForm from "../Components/TransactionEditForm.js";

function Edit({updateTransaction, transactions}) {
  return (
    <div className="Edit">
      <h2>Edit</h2>
      <TransactionEditForm 
      transactions={transactions}
      updateTransaction={updateTransaction}/>
    </div>
  );
}

export default Edit;
