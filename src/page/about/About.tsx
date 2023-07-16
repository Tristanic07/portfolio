import { FaJava, FaReact, FaPhp, FaJs, FaPython } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import alain from "../../assets/image/alain1.jpg";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-7 py-32">
      <div>
        <img src={alain} className="w-72" />
      </div>
      <h1 className="text-center font-tektur font-bold text-4xl">Skills</h1>
      <section className="grid grid-rows-3 grid-cols-2 md:h-96   md:grid-rows-2 md:grid-cols-3  gap-5 ">
        {[FaJava, FaReact, FaPhp, FaJs, FaPython, SiMysql].map(
          (Skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-48 h-32 border-2 rounded-xl shadow-md shadow-yellow-400 hover:shadow-2xl hover:shadow-yellow-500 hover:h-36 hover:w-52 duration-1000"
            >
              <Skill className="h-16 w-16 d:h-24 md:w-24 text-gray " />
            </div>
          )
        )}
      </section>
    </div>
  );
}
