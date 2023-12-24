import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostList/index";
import Model from "./components/Model/index";
import PostForm from "./components/PostForm/index";

function OnChangeEvent() {
  let [showModel, setShowModel] = useState(false);
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

  return (
    <>
      <Navbar setShowModel={setShowModel} />
      <PostsList posts={posts} />
      {showModel && (
        <Model setShowModel={setShowModel}>
          <PostForm />
        </Model>
      )}
    </>
  );
}
export default OnChangeEvent;
