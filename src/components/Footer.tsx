import { IoLogoLinkedin, IoLogoGithub, IoIosSend } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap bg-[#A67C52] h-15 justify-start items-start">
      <p className="flex items-center">
        <IoLogoGithub />
        <a href="https://github.com/MatheusMedeiros-Dev">GitHub</a>
      </p>
      <p className="flex items-center">
        <IoLogoLinkedin />
        <a href="https://www.linkedin.com/in/matheus-cavalcanti-dev/">
          LinkedIn
        </a>
      </p>
      <p className="flex items-center">
        <IoIosSend />
        <a href="matheuscavalcantidev@outlook.com">E-mail</a>
      </p>
    </footer>
  );
};

export default Footer;
