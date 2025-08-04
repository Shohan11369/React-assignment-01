import React from "react";

function Footer() {
  return (
    <footer className="bg-[#07292F] text-gray-400 text-sm py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo or Text */}
        <div className="text-white font-semibold text-lg tracking-wide">
          <img src="Logo.png" alt="" />
        </div>

        {/* Right: Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          Copyright © 2023 Wizia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
