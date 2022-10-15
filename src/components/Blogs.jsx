import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
// import { blogs } from "../utilities/enums";
import * as actionBlog from "../redux/actions/actionBlog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const { getAllBlogs } = bindActionCreators(actionBlog, useDispatch())

  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response.payload);
    });
  }, []);

  const renderBlogs = () => {
    return blogs.map((blog) => (
      <div className="col-md-6 col-lg-4 card border-0 my-3" key={blog.id}>
        <img src={blog.image} alt="Blog 3" />
        <div className="card-body px-0">
          <h4 className="card-title">{blog.title}</h4>
          <p className="card-text mt-3 text-muted">{blog.body}</p>
          <p className="card-text">
            <small className="text-muted">Author: </small>
            {blog.author}
          </p>
          <Link to="/products" className="btn">
            Read More
          </Link>
        </div>
      </div>
    ));
  };
return (
    <section id="blogs" className="py-5">
      <div className="container">
        <div className="title text-center py-5">
          <h2 className="position-relative d-inline-block">Our Latest Blog</h2>
        </div>
        <div className="row">{renderBlogs()}</div>
      </div>
    </section>
  );
}
