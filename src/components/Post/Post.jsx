import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handlePost = () => {
    navigate(`/post/${id}`);
  };
  const { body, title, id } = post;
  return (
    <div
      style={{
        border: " 2px solid royalblue",
        margin: "20px",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <h5>{title}</h5>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <br />
      <br />
      {/*//! This is post details using button; */}
      <button onClick={handlePost}>Post Details Using Button</button>
    </div>
  );
};

export default Post;
