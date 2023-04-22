// import logo from "../Components/logo.png"
// import moon from "../Components/moon.jpeg"
import background from "../Components/Background.jpeg"

function Home() {
    return (
      <div className="Home">
        <img classname="background" src={background} alt="background"></img> 
        <h1>Welcome</h1>
        <h2>To the Budgeting App!</h2>
        {/* <img src={logo} alt="logo" width="400px"></img> */}
        <p className="moon">Too the Moon! </p>
        {/* <br></br><img src={moon} alt="moon" width="400px"></img> */}
      </div>
    );
  }
  
  export default Home;
  