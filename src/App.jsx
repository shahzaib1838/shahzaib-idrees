import Header from "./header";
import Home from "./Home";
import Contact from "./Contact";
import Blog from "./Blog";
import GuestPosting from "./Guest-Posting";
import SingleBlogPost from "./Single-Blog-Post";
import Footer from "./Footer";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SingleBlogPost />} />
        <Route path="/guest-posting" element={<GuestPosting />} />
      </Routes>

      {/* Footer will appear on every page */}
      <Footer />
    </>
  );
}

export default App;