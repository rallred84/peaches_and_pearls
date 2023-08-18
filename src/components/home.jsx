import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([`Testing`, "Again"]);
  const [post, setPost] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    console.log(post);
    setPosts([post, ...posts]);
    setPost("");
  };

  return (
    <>
      <h3>Testing Posts</h3>
      {posts.map((post) => {
        return (
          <p key={Math.random()} className="post-text">
            {post}
          </p>
        );
      })}
      <form action="" onSubmit={(e) => handleAddPost(e)}>
        <textarea
          value={post}
          cols="30"
          rows="10"
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <button>Add Post</button>
      </form>
    </>
  );
};

export default Home;
