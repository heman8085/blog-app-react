import React from "react";

const BlogList = ({ blogs, handleDelete, handleEdit }) => {
  
  return (
    <ul className="allBlogs">
      {blogs.map((blog) => (
        <li className="singleBlog" key={blog.id}>
          <img src={blog.imageLink} alt={blog.title} width="200" height="200"/>
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
          <div>
            <button onClick={() => handleEdit(blog.id)}>Edit</button>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
