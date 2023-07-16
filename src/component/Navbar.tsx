import { useState, useEffect } from "react";
import { FaBars, FaArrowRightFromBracket, FaUser } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const [isSelected, setIsSelected] = useState(false);

  function menuClick() {
    setIsSelected(!isSelected);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsSelected(false);
      } else {
        setIsSelected(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="fixed items-center bg-gray-400 glass px-10 md:px-20 py-5 md:flex md:justify-between w-full z-20">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold font-body text-white  hover:text-5xl  hover:text-yellow-300 duration-1000">
          {" "}
          <a href="/">ATL.</a>
        </h1>
        {isSelected ? (
          <FaBars
            className="h-9 w-9 md:hidden text-white"
            onClick={() => menuClick()}
          />
        ) : (
          <FaArrowRightFromBracket
            className="h-9 w-9   md:hidden text-white "
            onClick={() => menuClick()}
          />
        )}
      </div>
      <ul
        className={`flex flex-col  left-0 w-full gap-2  bg-gray-400 text-white z-20  ${
          isSelected
            ? "opacity-0 pl-14 pointer-events-none"
            : "opacity-100 pl-10 p-4"
        } md:w-auto md:flex-row md:static md:gap-5  absolute transition-all ease-in duration-500`}
      >
        {[
          { text: "Home", url: "/", logo: FaHome },
          {
            text: "About",
            url: "/Project",
            logo: FaUser,
          },

          { text: "About", url: "/About", logo: FaHome },
          { text: "Contact", url: "/Contact", logo: FaHome },
        ].map((item, index) => (
          <li
            key={`k${index}`}
            className=" font-semibold font-tektur flex items-center gap-1 text-lg hover:text-xl w-28 hover:text-yellow-300 duration-1000"
          >
            <item.logo />
            <a href={item.url}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
