import { FaJava, FaReact, FaPhp, FaJs, FaPython } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import alain from "../../assets/image/alain1.jpg";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-7 px-10 py-32 ">
      <div className="flex items-center flex-col-reverse sm:h-96 sm:flex-row sm:justify-center gap-14 sm:gap-28 py-10">
        <section className="sm:w-1/3">
          <p className="text-gray-600 font-tektur ">
            <span className="ml-7"></span>Hi, I'm{" "}
            <b className=" text-yellow-600">Alain Tristan G. Lado</b>, a recent
            graduate with a strong foundation in {""}
            <i className="font-semibold text-yellow-600">
              HTML, CSS, JavaScript, React.js, PHP, and MySQL
            </i>
            . Passionate about web development, I strive to create engaging user
            experiences with a focus on quality and usability.
          </p>
          <p className="text-gray-600 mt-4 font-tektur ">
            Eager to learn and stay updated with industry trends, I continuously
            improve my skills to deliver efficient and user-friendly web
            solutions. I embrace challenges and constantly expand my knowledge
            in the dynamic field of web development.
          </p>
          <p className="text-gray-600 mt-4 font-tektur ">
            Besides technical expertise, I value collaboration and effective
            communication. I thrive in supportive environments, working with
            passionate individuals to achieve shared goals and deliver
            exceptional results.
          </p>
        </section>
        <img
          src={alain}
          className="w-72 rounded-xl shadow-md shadow-yellow-400 hover:shadow-2xl hover:shadow-yellow-500  hover:w-80 duration-1000"
        />
      </div>
      <h1 className="text-center font-tektur font-bold text-4xl">Skills</h1>
      <section className="grid grid-rows-3 grid-cols-2 h-[27rem] sm:h-96   sm:grid-rows-2 sm:grid-cols-3  gap-5 ">
        {[FaJava, FaReact, FaPhp, FaJs, FaPython, SiMysql].map(
          (Skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-48 h-32 border-2 rounded-xl shadow-md shadow-yellow-400 hover:shadow-2xl hover:shadow-yellow-500 hover:h-36 hover:w-52 duration-1000"
            >
              <Skill className="h-16 w-16 d:h-24 sm:w-24 text-gray " />
            </div>
          )
        )}
      </section>
    </div>
  );
}
