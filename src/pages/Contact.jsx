import { InteractiveHoverButton } from "@/components/ui/magicui/interactive-hover-button";
import { BlurFade } from "@/components/ui/magicui/blur-fade";

import { Link } from "react-router-dom";
import { Facebook, Instagram, Github } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <div className="mt-2 pb-20">
      <BlurFade duration={0.4}>
        <Link to="/" smooth>
          <InteractiveHoverButton className="text-white">
            Back
          </InteractiveHoverButton>
        </Link>
        <header className="mt-8">
          <h2 className="font-semibold text-2xl font-montserrat mb-2">
            Contact Me
          </h2>
          <p>You can contact me in a various ways.</p>
        </header>
        <article>
          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="https://web.facebook.com/rith.horm.75" target="_blank">
              <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                <Facebook /> Facebook
              </button>
            </a>
            <a href="https://web.facebook.com/rith.horm.75" target="_blank">
              <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                <Instagram /> Instagram
              </button>
            </a>
            <a href="https://github.com/Whisuuu" target="_blank">
              <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                <Github /> GitHub
              </button>
            </a>
            <a href="https://t.me/rithhorm" target="_blank">
              <button className="flex gap-2 text-white w-[170px] md:w-[180px] px-8 py-2 rounded-md transition duration-300 border border-[#454545] hover:bg-[#454545]">
                <FaTelegramPlane className="h-6" /> Telegram
              </button>
            </a>
          </div>
        </article>

        <div>
          <h2 className="font-semibold text-2xl font-montserrat mt-12">
            Via Email
          </h2>
          <p>Send me messages through email.</p>
        </div>
        <div className="mt-10">
          <div className="border border-[#6b6b6b] px-3 md:px-6 py-8 md:py-18 rounded-2xl">
            <h4 className="text-center text-2xl md:text-4xl mb-8">
              Send Me Message
            </h4>

            <form
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center"
            >
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email_from"
                className="w-full md:w-[70%] bg-[#222222] px-5 py-3 rounded-lg outline-0"
              />
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name_from"
                className="w-full md:w-[70%] bg-[#222222] px-5 py-3 rounded-lg outline-0"
              />
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="message"
                className="w-full md:w-[70%] h-[100px] bg-[#222222] px-5 py-3 rounded-lg outline-0"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-[70%] bg-[#444444] px-5 py-3 rounded-lg mt-4 text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </BlurFade>
    </div>
  );
};

export default Contact;
