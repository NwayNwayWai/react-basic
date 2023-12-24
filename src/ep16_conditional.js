import "./App.css";
import { useState } from "react";

function Conditional() {
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
        {!!posts.length &&
          posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={() => deletePost(post.id)}>delete</button>
            </li>
          ))}
        {!posts.length && <p>No Posts Avaiable!</p>}
      </ul>
    </div>
  );
}

export default Conditional;
