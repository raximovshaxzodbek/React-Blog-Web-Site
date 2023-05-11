import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../hooks/LoginContext";
export default function CreatePost() {
  const [isCreatePost, setIsCreatePost] = useState(false);
  const {
    userName,
    title,
    parapgraph,
    setUserName,
    setTitle,
    setParagraph,
    posts,
  } = useContext(LoginContext);

  const navigate = useNavigate();

  const createPost = (props) => {
    props.preventDefault();
    if (userName && title && parapgraph) {
      setIsCreatePost(true);
      posts.push({ userName, title, parapgraph });
      localStorage.setItem("posts", JSON.stringify(posts));
      setUserName("");
      setTitle("");
      setParagraph("");
      navigate("/");
    } else {
      alert("Warning!!!");
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <header className="flex items-center justify-center">
        <form
          className="flex min-h-[500px] w-[400px] flex-col items-center justify-center gap-3 rounded-md bg-blue-500 py-8 shadow-lg shadow-gray-400"
          onSubmit={(event) => createPost(event)}
        >
          <label>
            <span>UserName:</span>
            <input
              type="text"
              name="fullname"
              value={userName}
              placeholder="Username"
              onChange={(event) => setUserName(event.target.value)}
            />
          </label>
          <label>
            <span>Title:</span>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            <span>Parapgrapg:</span>
            <textarea
              name="parapgrapg"
              className="my-4 h-[150px] w-full resize-none rounded-lg p-3 text-xl outline-none"
              value={parapgraph}
              onChange={(event) => setParagraph(event.target.value)}
              placeholder="Parapgrapg"
            ></textarea>
          </label>
          <button
            disabled={isCreatePost}
            className={isCreatePost ? "pointer-events-none" : "cursor-pointer"}
          >
            {isCreatePost ? "Loading..." : "Create Post"}
          </button>
        </form>
      </header>
    </div>
  );
}
