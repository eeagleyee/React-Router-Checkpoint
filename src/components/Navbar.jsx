import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md p-2">
      <Link to="/" className="no-underline">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          {/* brand logo */}

          <img
            src="https://static.vecteezy.com/system/resources/previews/016/017/438/original/movie-camera-icon-free-png.png"
            alt="brand logo"
            className="w-14"
          />
          <h2 className="text-red-800 tracking-wider "> Movie App </h2>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
