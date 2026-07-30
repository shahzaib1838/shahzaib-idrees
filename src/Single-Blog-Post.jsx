import { useParams } from "react-router-dom";
import blogs from "./Blogs";
import "./App.css";

function SingleBlog() {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="single-blog">
        <div className="container">
          <h1>404</h1>
          <p>Blog not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="single-blog">
      <div className="container">

        {/* Featured Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="blog-image"
        />

        {/* Category */}
        <span className="blog-category">
          {blog.category}
        </span>

        {/* Title */}
        <h1 className="blog-title">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="blog-meta">
          <span>👤 {blog.author}</span>
          <span>📅 {blog.date}</span>
        </div>

        {/* Content */}
        <div className="blog-content">
          {blog.content
            .trim()
            .split("\n")
            .map((paragraph, index) =>
              paragraph.trim() ? (
                <p key={index}>{paragraph}</p>
              ) : null
            )}
        </div>

        {/* Comment Section */}
        <div className="comments">

          <h2>Leave a Comment</h2>

          <form className="comment-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Write your comment..."
            ></textarea>

            <button type="submit">
              Post Comment
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default SingleBlog;