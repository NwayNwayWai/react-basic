import "./App.css";
import { useState } from "react";
import StateUpdate from "./ep14_state_update";

function StateDelete() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
    },
    {
      id: 2,
      title: "Second post",
    },
    {
      id: 3,
      title: "Third post",
    },
  ]);

  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div className="app">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => deletePost(post.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StateDelete;
