import React from "react";
import flogo from "../../assets/F.png";

const Footer = () => {
  return (
    <footer className="bg-transparent backdrop-blur-md text-neutral-content p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2">
        <img src={flogo} alt="Logo" className="w-12 h-12 object-contain" />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
          Fahim Web
        </span>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-grow">
        <nav>
          <h6 className="footer-title text-white text-lg font-semibold mb-2">
            Services
          </h6>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Branding
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Design
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Marketing
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Advertisement
          </a>
        </nav>

        <nav>
          <h6 className="footer-title text-white text-lg font-semibold mb-2">
            Company
          </h6>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            About us
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Contact
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Jobs
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Press kit
          </a>
        </nav>

        <nav>
          <h6 className="footer-title text-white text-lg font-semibold mb-2">
            Legal
          </h6>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Terms of use
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Privacy policy
          </a>
          <a className="link link-hover bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] block">
            Cookie policy
          </a>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="text-sm text-center text-slate-400 mt-6 md:mt-0">
        © {new Date().getFullYear()} fahim-shahriyar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
