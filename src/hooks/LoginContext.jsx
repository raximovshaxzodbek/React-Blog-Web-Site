import { createContext, useState } from "react";

export const LoginContext = createContext({});

export default function LoginContextProvider({ children }) {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [parapgraph, setParagraph] = useState("");
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  return (
    <LoginContext.Provider
      value={{
        userName,
        title,
        parapgraph,
        setUserName,
        setTitle,
        setParagraph,
        posts,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
