import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/8619617/pexels-photo-8619617.png?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">This is my post Title</span>
        <hr />
        <span className="postDate">1hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil
        optio cumque non pariatur minus nesciunt vel ad exercitationem quam
        necessitatibus, velit sapiente praesentium officia corrupti? Veniam
        pariatur enim omnis.
      </p>
    </div>
  );
};

export default Post;
