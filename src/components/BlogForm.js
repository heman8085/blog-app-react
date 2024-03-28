import React from "react";

const BlogForm = ({
  handleSubmit,
  imageLink,
  title,
  description,
  editId,
  setImageLink,
  setTitle,
  setDescription,
}) => {
  return (
    <form className="blogForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image Link"
        value={imageLink}
        onChange={(e) => setImageLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button type="submit">{editId ? "Update Blog" : "Add Blog"}</button>
    </form>
  );
};

export default BlogForm;
