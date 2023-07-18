import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 items-center px-20 py-5 bg-gray-400 md:flex-row md:justify-between">
      <h1 className="  font-tektur  items-center text-white gap-1 hover:text-yellow-300 duration-1000">
        Designed and Developed by Alain Lado
      </h1>
      <h1 className="  font-tektur  items-center gap-1  text-white hover:text-yellow-300 duration-1000">
        Alrights Reserved © 2023 ATL
      </h1>
      <section className="flex gap-4 text-white text-xl">
        <a href="https://github.com/Tristanic07" target="_blank">
          <FaGithub className="hover:text-yellow-700 duration-1000" />
        </a>
        <a href="https://www.facebook.com/shirlulu7/" target="_blank">
          <FaFacebook className="hover:text-yellow-700 duration-1000" />
        </a>
        <a
          href="https://www.linkedin.com/in/alain-lado-43660a283/"
          target="_blank"
        >
          <FaLinkedin className="hover:text-yellow-700 duration-1000" />
        </a>
        <a href="https://www.instagram.com/shirlulu7/" target="_blank">
          <FaInstagram className="hover:text-yellow-700 duration-1000" />
        </a>
      </section>
    </div>
  );
}
