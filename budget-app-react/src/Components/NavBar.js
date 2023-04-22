import { Link } from "react-router-dom";
import logo from "./logo.png"

export default function NavBar() {
  return (
    <div>

    <nav>
      
      
        <Link to="/transactions" className="Appname"> Budgtr </Link>

        <img src={logo} alt="logo" width="120px"></img> 


      <button>
        <Link to="/transactions/new"> New Transactions </Link>
      </button>

      
    </nav>
    </div>
  );
}
