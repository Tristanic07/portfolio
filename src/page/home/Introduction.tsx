import avatar from "../../assets/image/avatar.png";

export default function Introduction() {
  return (
    <div className=" py-10 px-10 sm:px-20 sm:py-20 border-t-2">
      <h1 className="font-tektur  text-4xl h-14 font-semibold text-center text-gray-800 sm:text-5xl sm:font-bold sm:hidden ">
        ABOUT ME
      </h1>
      <div className="flex flex-col items-center gap-5 py-5 sm:flex-row sm:justify-center sm:gap-28">
        <img
          src={avatar}
          alt="avatar"
          className="h-96 rounded-3xl  sm:w-72 sm:h-auto duration-500 hover:animate-wave"
        />
        <section className="sm:w-1/2">
          <h1 className="font-tektur  h-14 font-semibold text-center text-gray-800 sm:show sm:text-5xl sm:font-bold sm:block  hidden ">
            ABOUT ME
          </h1>
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
      </div>
    </div>
  );
}
