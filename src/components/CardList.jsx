import React, { useState } from "react";

import Card from "./Card";

import initialPosts from "../data/posts";

function CardList() {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, published: false } : post
      )
    );
  };

  return (
    <div className="col-9 d-flex flex-wrap gap-3 justify-content-center">
      {posts
        .filter((post) => post.published)
        .map((post) => (
          <Card post={post} key={post.id} onDelete={handleDelete} />
        ))}
    </div>
  );
}

export default CardList;
