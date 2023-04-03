import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const post = useLoaderData();
  console.log(post);
  const { body, title, userId } = post;
  return (
    <div>
      <h4>Posts all details are here</h4>
      <h1 style={{ color: "blue" }}>Writer Code: {userId}</h1>
      <h5>{title}</h5>
      <p style={{ color: "red" }}>{body}</p>
      <button onClick={handleGoBack}>Back</button>
    </div>
  );
};

export default PostDetails;
