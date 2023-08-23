import { useEffect, useState } from "react";
import logo from "./images/SPPlogo.png";
import { Outlet, useNavigate } from "react-router-dom";
import { existingPosts } from "./existingPosts";

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(existingPosts);
  }, []);

  return (
    <>
      <header>
        <img src={logo} alt="Sweet Peaches and Pearls Logo" id="logo" />
      </header>
      <nav>
        <div onClick={() => navigate("/")}>HOME</div>
        <div onClick={() => navigate("/about")}>ABOUT ME</div>
        <div onClick={() => navigate("/recipes")}>RECIPES</div>
        <div onClick={() => navigate("/jesus")}>JESUS TALK</div>
        <div onClick={() => navigate("/create")}>CREATE POST</div>
      </nav>
      <Outlet context={{ posts, setPosts }} />
    </>
  );
}

export default App;
