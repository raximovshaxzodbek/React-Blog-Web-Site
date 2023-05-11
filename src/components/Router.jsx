import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, CreatePost, ErrorPage } from "../imports";
import Loading from "./Loading";

export default function Router() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Routes>
        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading width={200} height={200} />}>
              <ErrorPage />
            </React.Suspense>
          }
        />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading width={200} height={200} />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/create-post"
          element={
            <React.Suspense fallback={<Loading width={200} height={200} />}>
              <CreatePost />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}
