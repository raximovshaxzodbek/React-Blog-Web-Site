import React from "react";
const Home = React.lazy(() => import("../views/Home"));
const CreatePost = React.lazy(() => import("../views/CreatePost"));
const ErrorPage = React.lazy(() => import("../views/ErrorPage"));

export { Home, CreatePost, ErrorPage };
