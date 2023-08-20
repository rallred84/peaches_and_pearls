import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

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
          <div key={Math.random()} className="post-text">
            {parse(post)}
          </div>
        );
      })}
      <form action="" onSubmit={(e) => handleAddPost(e)}>
        {/* <textarea
          value={post}
          cols="30"
          rows="10"
          onChange={(e) => setPost(e.target.value)}
        ></textarea> */}
        <ReactQuill
          theme="snow"
          modules={modules}
          placeholder="Content goes here..."
          onChange={setPost}
        />
        <button>Add Post</button>
      </form>
    </>
  );
};

export default Home;
