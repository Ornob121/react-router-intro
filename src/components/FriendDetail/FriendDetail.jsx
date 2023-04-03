import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  const { name, website, company, address } = friend;
  return (
    <div>
      <h3>Everything about this person is here</h3>
      <h4>Name: {name}</h4>
      <p>Website: {website}</p>
      <p>
        Address: {address.suite}, {address.street}
      </p>
      <p>Company: {company.name}</p>
    </div>
  );
};

export default FriendDetail;
