import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <a
          href="/"
          aria-label="Home"
          className="text-red-500 text-[36px] font-semibold"
        >
          7oksh
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Modather-Mohamed"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61561938812111"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white"
        >
          <FaFacebook />
        </a>
        <a
          href="https://mail.google.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          className="text-white"
        >
          <SiGmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
