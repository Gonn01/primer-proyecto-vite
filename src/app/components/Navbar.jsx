import { Link } from "react-router-dom";
import React from "react";
export function Navbar() {
  return (
    <nav className="fixed flex justify-between items-center h-20 bg-cyan-950 w-full shadow-2xl">
      <h1 className="ml-10 text-4xl text-white font-bold">Robots!</h1>
      <ul className="list-none flex w-72 justify-between text-white text-xl mr-10">
        <CustomLink to="/" text="Robot list"></CustomLink>
        <CustomLink to="/create-user" text="Create your robot" />
      </ul>
    </nav>
  );
}
function CustomLink({ to, text }) {
  return (
    <Link className="mx-1" to={to}>
      {text}
    </Link>
  );
}
