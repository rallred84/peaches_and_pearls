import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { useOutletContext } from "react-router-dom";

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

const CreatePost = () => {
  // const { posts, setPosts } = useOutletContext();

  const handleAddPost = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Create New Post</h1>
      <form action="" onSubmit={(e) => handleAddPost(e)}>
        <input type="text" placeholder="Post Title*" required />
        <ReactQuill
          theme="snow"
          modules={modules}
          placeholder="Content goes here..."
          // onChange={setPost}
        />
        <button>Add Post</button>
      </form>
    </>
  );
};

export default CreatePost;
