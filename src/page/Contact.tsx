import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userName = form.current?.querySelector(
      'input[name="user_name"]'
    ) as HTMLInputElement;
    const userEmail = form.current?.querySelector(
      'input[name="user_email"]'
    ) as HTMLInputElement;
    const message = form.current?.querySelector(
      'textarea[name="message"]'
    ) as HTMLTextAreaElement;

    if (!userName.value || !userEmail.value || !message.value) {
      alert("Please fill in all fields");
      return;
    }

    emailjs
      .sendForm(
        "service_jd5h3ul",
        "template_y73s42k",
        form.current!,
        "a_umE8M18n6Z8i8XM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent!");
          window.location.reload();
        }
      );
  };
  return (
    <div className="flex justify-center items-center h-132 md:h-screen">
      <div className="flex flex-col rounded-md bg-gray-400 mt-28 w-10/12 items-center gap-5 md:flex-row md:justify-center md:items-start py-10 md:w-128">
        <div className="flex flex-col gap-5 w-80 md:w-96 ">
          <h1 className="text-5xl font-tektur text-white ">Get in Touch</h1>
          <p className="text-lg font-tektur text-white">
            Whether you want to get in touch, talk about a project
            collaboration, or just say hi, I'd love to hear from you. Simply
            fill the from and send me an email.
          </p>
          <section className="flex gap-4 text-white text-3xl ">
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
        <hr className="bg-white md:w-px md:h-96  " />
        <hr className="bg-white w-2/3 h-px md:hidden" />
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" w-80 md:w-96 flex flex-col gap-4 text-white"
        >
          <h1 className="text-4xl font-tektur">Send a Message</h1>

          <input
            type="text"
            name="user_name"
            className="rounded-md h-11 px-2"
            placeholder="YOUR NAME"
          />

          <input
            type="email"
            name="user_email"
            className="rounded-md h-11 px-2 "
            placeholder="YOUR EMAIL"
          />

          <textarea
            name="message"
            className="rounded-md px-2 h-32"
            placeholder="MESSAGE"
          />
          <input
            type="submit"
            value="Send"
            className="bg-yellow-600  font-tektur text-lg rounded-md text-white h-12 mt-4"
          />
        </form>
      </div>
    </div>
  );
}
