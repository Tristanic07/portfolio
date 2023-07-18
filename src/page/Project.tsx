export default function Project() {
  return (
    <div className="flex items-end justify-center py-48 ">
      <section className="grid items-center justify-center grid-cols-2  gap-2 md:grid-cols-3 h-128 ">
        {[
          {
            name: "Coming Soon!",
            img: "",
            text: "Project Description will be put here!!!",
          },
          {
            name: "Coming Soon!",
            img: "",
            text: "Project Description will be put here!!!",
          },
          {
            name: "Coming Soon!",
            img: "",
            text: "Project Description will be put here!!!",
          },
          {
            name: "Coming Soon!",
            img: "",
            text: "Project Description will be put here!!!",
          },
          {
            name: "Coming Soon!",
            img: "",
            text: "Project Description will be put here!!!",
          },
          {
            name: "Coming Soon!",
            img: "",
            text: "Project Description will be put here!!!",
          },
        ].map((project, index) => {
          return (
            <div
              className="flex flex-col items-center py-2 px-2 text-center justify-between h-80 w-52 border-2 shadow-sm shadow-yellow-400 hover:w-53 hover:h-81 hover:shadow-2xl hover:shadow-yellow-400"
              key={index}
            >
              <img
                src={project.img}
                alt={project.img}
                className="h-48 w-48  rounded-full border-4 border-yellow-600 "
              />
              <h1>{project.name}</h1>
              <p>{project.text}</p>
              <div className="flex gap-3">
                <button className="w-20 h-7 bg-gray-500">Github</button>
                <button className="w-20 h-7 bg-gray-500">Live</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
