import "./App.css";
import blogs from "./Blogs.jsx";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <p className="breadcrumb">
            Home <span>/</span> Blog
          </p>

          <h1>Tech Insights & Tutorials</h1>

          <p className="hero-desc">
            Stay updated with the latest articles on Artificial Intelligence,
            Web Development, Cloud Computing, Programming, SEO and modern
            technologies.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="blog-section">
        <div className="container">
          <div className="section-title">
            <h2>Latest Articles</h2>

            <p>
              Explore our latest blogs covering AI, software development,
              programming, cloud computing and digital innovation.
            </p>
          </div>

          <div className="blog-grid">
            {blogs.map((blog) => (
              <div className="blog-card" key={blog.id}>
                <img src={blog.image} alt={blog.title} />

                <div className="card-content">
                  <span className="category">{blog.category}</span>

                  <h3>{blog.title}</h3>

                  <p>{blog.excerpt}</p>

                  <div className="card-footer">
                    <span>{blog.date}</span>

                   <Link to={`/blog/${blog.slug}`} className="read-more-btn">
  Read More →
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;