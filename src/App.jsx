import logo from "./images/SPPlogo.png";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <img src={logo} alt="Sweet Peaches and Pearls Logo" id="logo" />
      </header>
      <nav>
        <div onClick={() => navigate("/")}>HOME</div>
        <div onClick={() => navigate("/jesus")}>JESUS TALK</div>
        <div onClick={() => navigate("/about")}>ABOUT ME</div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
