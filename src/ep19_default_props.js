import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostList/index";
import Model from "./components/Model/index";

function DefaultProps() {
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
        <Model>
          {/* <h1>Zoom class is available now.</h1>
        <p>
          feel free to <a href="">join</a> here
        </p> */}
          <h1>Terms & Conditions</h1>
          <button onClick={() => setShowModel(false)}>Close</button>
        </Model>
      )}
    </>
  );
}
export default DefaultProps;
