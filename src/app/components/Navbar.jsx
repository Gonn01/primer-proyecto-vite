import { Link } from "react-router-dom";
import React from "react";
export function Navbar() {
  return (
    <nav className="flex justify-between">
      <CustomLink to="/" text="Home"></CustomLink>
      <ul className="list-none flex">
        <li>
          <CustomLink to="/1" text="Section Nro1" />
        </li>
        <li>
          <CustomLink to="/2" text="Section Nro2" />
        </li>
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
