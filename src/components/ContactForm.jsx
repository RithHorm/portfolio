import emailjs from "@emailjs/browser";
import { BlurFade } from "./ui/magicui/blur-fade";
const ContactForm = () => {
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
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
        }
      );
  };
  return (
    <div className="mt-30">
      <div className="border border-[#6b6b6b] px-3 md:px-6 py-14 md:py-18 rounded-2xl">
        <h4 className="text-center text-4xl">Get In Touch</h4>
        <p className="text-center mt-3 mb-8">
          Want to get in touch? Send me messages through email.
        </p>
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
  );
};

export default ContactForm;
