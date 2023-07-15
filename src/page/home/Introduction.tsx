import alain from "../../assets/image/alain.jpg";

export default function Introduction() {
  return (
    <div className="bg-gray-100 py-10 px-20">
      <h1 className="font-mono text-4xl h-14 font-semibold text-gray-800 md:text-5xl md:font-bold md:hidden ">
        ABOUT ME
      </h1>
      <div className="flex flex-col items-center gap-5 py-5 md:flex-row md:justify-center md:gap-28">
        <img src={alain} className="h-96 md:w-72 md:h-auto" />
        <section className="md:w-1/2">
          <h1 className="font-mono h-14 font-semibold text-center text-gray-800 md:show md:text-5xl md:font-bold md:block  hidden ">
            ABOUT ME
          </h1>
          <p className="text-gray-600">
            Hi, I'm <b>Alain Tristan G. Lado</b>, a recent graduate with a
            strong foundation in{" "}
            <i>HTML, CSS, JavaScript, React.js, PHP, and MySQL</i>. Passionate
            about web development, I strive to create engaging user experiences
            with a focus on quality and usability.
          </p>
          <p className="text-gray-600 mt-4">
            Eager to learn and stay updated with industry trends, I continuously
            improve my skills to deliver efficient and user-friendly web
            solutions. I embrace challenges and constantly expand my knowledge
            in the dynamic field of web development.
          </p>
          <p className="text-gray-600 mt-4">
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
