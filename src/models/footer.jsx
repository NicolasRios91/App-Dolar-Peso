import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <a href="https://github.com/NicolasRios91" target="_blank">
        <FaGithub className="icon" id="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-rios-425464196/"
        target="_blank"
      >
        <FaLinkedin className="icon" id="linkedin" />
      </a>
      <a href="https://www.instagram.com/nico.rios91/" target="_blank">
        <FaInstagram className="icon" id="instagram" />
      </a>
    </footer>
  );
};

export default Footer;
