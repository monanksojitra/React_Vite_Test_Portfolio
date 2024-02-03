import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-wrap text-center justify-center gap-3 sm:justify-between items-center">
        <div className="max-md:flex items-center justify-center">
          <p className="text-sm">
            &copy; 2024 Monank Sojitra. All rights reserved. Terms of Service |
            Privacy Policy
          </p>
        </div>
        <div className="flex space-x-6 mx-auto md:mx-0">
          <a
            href="https://www.facebook.com/monaksojitra01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:scale-125 duration-200 ease-in-out" />
          </a>
          <a
            href="https://github.com/monanksojitra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:scale-125 duration-200 ease-in-out" />
          </a>
          <a
            href="https://www.instagram.com/monanksojitra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:scale-125 duration-200 ease-in-out" />
          </a>
          <a
            href="https://in.linkedin.com/in/monanksojitra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:scale-125 duration-200 ease-in-out" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
