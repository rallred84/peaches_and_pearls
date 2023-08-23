import parse from "html-react-parser";
import "../component-css/posts.css";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const { posts } = useOutletContext();

  return (
    <main>
      {posts.map((post) => {
        return (
          <article className="post" key={post.id}>
            <div className="post-category-label">
              <span>{post.categories[0]}</span>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-details">
              <span>posted on : {post.publishDate.toLowerCase()}</span>
              <span>posted by: {post.author}</span>
              {post.comments.length > 0 &&
                `${post.comments.length} ${
                  post.comments.length === 1 ? "comment" : "comments"
                }`}
            </div>
            <>{parse(post.postHTMl)}</>
          </article>
        );
      })}
    </main>
  );
};

export default Home;
