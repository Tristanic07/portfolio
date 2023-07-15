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
    <nav className=" items-center bg-transparent bg-slate-200 px-20 py-5 md:flex md:justify-between">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold font-body text-gray-800">ATL.</h1>
        {isSelected ? (
          <FaBars
            className="h-9 w-9 text-red-800 md:hidden "
            onClick={() => menuClick()}
          />
        ) : (
          <FaArrowRightFromBracket
            className="h-9 w-9   text-red-800 md:hidden "
            onClick={() => menuClick()}
          />
        )}
      </div>
      <ul
        className={`flex flex-col bg-slate-200 left-0 w-full gap-2 text-lg  text-yellow-600 z-10 ${
          isSelected
            ? "opacity-0 pl-14 pointer-events-none"
            : "opacity-100 pl-10 p-4"
        } md:w-auto md:flex-row md:static md:gap-5  absolute transition-all ease-in duration-500`}
      >
        {[
          { text: "Home", url: "#", logo: FaHome },
          {
            text: "AboutMe",
            url: "",
            logo: FaUser,
          },
          { text: "Skills", url: "#", logo: FaHome },
          { text: "Project", url: "#", logo: FaHome },
          { text: "Contact", url: "#", logo: FaHome },
        ].map((item, index) => (
          <>
            <li
              key={index}
              className=" font-semibold font-mono flex items-center gap-1 hover:text-purple-950 duration-1000"
            >
              <item.logo />
              <a href={item.url}>{item.text}</a>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
}
