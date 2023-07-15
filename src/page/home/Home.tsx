import Typewriter from "typewriter-effect";
import coder1 from "../../assets/image/coder1.png";
import Introduction from "./Introduction";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-14 px-20 py-24 md:flex-row md:justify-between">
        <div className="md:w-1/2 pl-0">
          <h1 className="text-lg font-mono text-gray-700 animate-pulse ">
            Alain Tristan Lado
          </h1>
          <h1 className="font-mono text-4xl h-14 font-semibold text-gray-800 md:text-5xl md:font-bold">
            <Typewriter
              options={{
                strings: ["Interactive Frontend <br> Web Developer"],

                autoStart: true,
                loop: true,
                deleteSpeed: 150,
                delay: 250,
                cursor: "🖋",
              }}
            />
          </h1>
          <p className="text-lg text-gray-500  mt-14">
            <span className="ml-10">Welcome to my portfolio!</span> I specialize
            in interactive frontend web development and have a passion for
            creating engaging web experiences. With a keen eye for design and
            attention to detail, I strive to bring ideas to life through elegant
            and intuitive user interfaces. Let's collaborate and create
            something amazing together!
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={coder1}
            className="border-2 rounded-full w-72 h-72 hover:shadow-xl md:mr-10  md:w-96 md:h-96"
          />
        </div>
      </div>
      <Introduction />
    </div>
  );
}
