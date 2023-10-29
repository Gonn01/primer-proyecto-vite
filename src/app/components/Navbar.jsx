import { Link } from "react-router-dom";
import React from "react";
export function Navbar() {
  return (
    <nav className="flex justify-between">
      <p>Robots!</p>
      <ul className="list-none flex">
        <CustomLink to="/" text="Home"></CustomLink>
        <CustomLink to="/create-user" text="Section Nro1" />
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
