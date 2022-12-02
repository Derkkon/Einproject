import React from "react";

function navbar() {
  return (
    <nav className="flex justify-between p-8 bg-slate-800 text-white">
      <h1>Title</h1>

      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default navbar;
