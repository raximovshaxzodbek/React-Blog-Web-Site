import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import { LoginContext } from "../../hooks/LoginContext";
import { FaTrashAlt } from "react-icons/fa";
export default function Home() {
  const { posts } = useContext(LoginContext);

  const deletePost = (title) => {
    if (confirm("Rostan ham o'chirishni istaysizmi?")) {
      const functionPosts = JSON.parse(localStorage.getItem("posts"));
      const filterPosts = functionPosts.filter((post) => {
        if (post.title !== title) {
          return post;
        }
      });
      localStorage.setItem("posts", JSON.stringify(filterPosts));
      window.location.reload();
    }
  };
  return (
    <div className="container-fluid">
      <Navbar />
      <header className="flex flex-wrap items-center justify-evenly gap-6">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              className="post relative flex flex-col justify-between"
              key={index + 1}
            >
              <div
                className="absolute right-2 top-2 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-lg bg-red-500 text-2xl text-white"
                onClick={() => deletePost(post.title)}
              >
                <FaTrashAlt />
              </div>
              <h2>{post.title}</h2>
              <div className="h-[70%] w-full overflow-auto">
                <p>{post.parapgraph}</p>
              </div>
              <h4>{post.userName}</h4>
            </div>
          ))
        ) : (
          <h2 className="text-red-500">Empty Post</h2>
        )}
      </header>
    </div>
  );
}
