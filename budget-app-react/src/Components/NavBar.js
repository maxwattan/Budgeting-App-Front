import { Link } from "react-router-dom";
import logo from "./logo.png"

export default function NavBar() {
  return (
    <div>

    <nav>
    
        {/* <img src={logo} alt="logo" width="150px"></img>  */}
      
        <Link to="/transactions" className="Appname"> Budgtr </Link>
      <button>
        <Link to="/transactions/new"> New Transactions </Link>
      </button>

      
    </nav>
    </div>
  );
}
