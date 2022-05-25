import React from "react";
import { Link } from "react-router-dom";
import "./BlogsSection.css";
import SingleBlog from "./single blog/SingleBlog";
function BlogsSection() {
  return (
    <div className="blog-section">
      <div className="blogSection-header">
        <Link to="/admindashboard/newblogpost">
          <button className="newPost-button">פוסט חדש</button>
        </Link>
        <h1>פוסטים אחרונים</h1>
      </div>

      <div className="blogs-section">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  );
}

export default BlogsSection;
