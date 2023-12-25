import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostList/index";
import Model from "./components/Model/index";
import PostForm from "./components/PostForm/index";

function OnSubmitEvent() {
  let [showModel, setShowModel] = useState(false);
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First post",
      status: "upcoiming",
    },
    {
      id: 2,
      title: "Second post",
      status: "dropped",
    },
  ]);

  let addPost = (post) => {
    setPosts((prevState) => [...prevState, post]);
    setShowModel(false);
  };

  return (
    <>
      <Navbar setShowModel={setShowModel} />
      <PostsList posts={posts} />
      {showModel && (
        <Model setShowModel={setShowModel}>
          <PostForm addPost={addPost} />
        </Model>
      )}
    </>
  );
}
export default OnSubmitEvent;
