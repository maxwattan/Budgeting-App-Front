// import logo from "../Components/logo.png"
// import moon from "../Components/moon.jpeg"
import background from "../Components/Background.jpeg"
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="Home">
        <br></br>
        <h1>Welcome</h1>
        <h2>To the Budgeting App!</h2>
        <p className="moon">To the Moon! </p>
        <Link to="/transactions"><img classname="background" src={background} alt="background"></img> </Link>
        {/* <img src={logo} alt="logo" width="400px"></img> */}
        {/* <br></br><img src={moon} alt="moon" width="400px"></img> */}
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
  
  export default Home;
  