import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <h3>Blog Web Site</h3>
      </Link>
      <menu className='flex gap-5 text-lg'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-post"}>CreatePost</NavLink>
      </menu>
    </nav>
  );
}
