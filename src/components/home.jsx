import { existingPosts } from "../existingPosts";
import parse from "html-react-parser";
import "../component-css/posts.css";

const Home = () => {
  return (
    <main>
      {existingPosts.map((post) => {
        return (
          <section key={post.id}>
            <div className="post-category-label">{post.categories[0]}</div>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-details">
              <span>posted on : {post.publishDate.toLowerCase()}</span>
              <span>posted by: {post.author}</span>
              {post.comments.length > 0 &&
                `${post.comments.length} ${
                  post.comments.length === 1 ? "comment" : "comments"
                }`}
            </div>
            <div className="post-html">{parse(post.postHTMl)}</div>
          </section>
        );
      })}
    </main>
  );
};

export default Home;
