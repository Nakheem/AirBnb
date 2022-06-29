import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2886&q=80"
        className="card--image"
        alt="cat"
      />
      <div className="card--stats">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_Yu-mWdKOYIY2nk69NwloqXh7Ovp5neIaw&usqp=CAU"
          className="card--star"
          alt="star"
        />
        <span> 5.0 </span>
        <span className="gray"> (6) </span>
        <span className="gray"> Canada</span>
      </div>
      <p> Life Lessons with this kitty cat</p>
      <p>
        {" "}
        <span className="bold"> From $136</span> /person{" "}
      </p>
    </div>
  );
}
