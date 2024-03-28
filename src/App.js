import React, { useState, useEffect } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";


const App = () => {
  const [imageLink, setImageLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(0);
  const [blogCount, setBlogCount] = useState("0");

  
  useEffect(() => {
    setBlogCount(blogs.length);
  }, [blogs]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editedBlogIndex = blogs.findIndex((blog) => blog.id === editId);
      const updatedBlogs = [...blogs];
      updatedBlogs[editedBlogIndex] = {
        id: editId,
        imageLink,
        title,
        description,
      };
      setBlogs(updatedBlogs);
      setEditId(0);
      setImageLink("");
      setTitle("");
      setDescription("");
      return;
    }

    if (imageLink !== "" && title !== "" && description !== "") {
      setBlogs([
        { id: `${title}-${Date.now()}`, imageLink, title, description },
        ...blogs,
      ]);
      //reset the input fields
      setImageLink("");
      setTitle("");
      setDescription("");
    }
  };

  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(filteredBlogs); 
  };

  const handleEdit = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    setImageLink(blogToEdit.imageLink);
    setTitle(blogToEdit.title);
    setDescription(blogToEdit.description);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
        <h1>Blog App</h1>
        <p>Total Blog : <span id="blog-counter">{blogCount}</span></p>
        </div>
        <BlogForm
          handleSubmit={handleSubmit}
          imageLink={imageLink}
          title={title}
          description={description}
          editId={editId}
          setImageLink={setImageLink}
          setTitle={setTitle}
          setDescription={setDescription}
        />
        <BlogList
          blogs={blogs}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
