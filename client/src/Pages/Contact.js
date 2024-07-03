import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_ct00re3",
        "template_cf3i0oi",
        form.current,
        "a57g5PEr_RviW00Fw"
      )
      .then(
        (result) => {
          //toast.success('Message sent Successfully');
          alert("Message sent Successfully")
          form.current.reset();
        },
        (error) => {
          //toast.error("Failed to Send Message! Please Try Again!")
          alert("Failed to Send Message! Please Try Again!")
          form.current.reset();
        }
      );
  };

  return (
    <div id="6">
      <Toaster position="top-right" reverseOrder={false} />
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div
          style={{
            backgroundImage: "url(/images/contact.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="p-8"
        >
          <h1 className="text-center text-white text-2xl font-bold">Contact Me</h1>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                className="border-2 border-green-400 rounded-lg p-2 w-full"
                type="text"
                name="name"
                placeholder="Enter your Name"
                aria-label="Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input
                className="border-2 border-green-400 rounded-lg p-2 w-full"
                type="email"
                name="email"
                placeholder="Enter your Email"
                aria-label="Email"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                className="border-2 border-green-400 rounded-lg p-2 w-full"
                placeholder="Enter your Message"
                style={{ height: "100px" }}
                name="message"
                aria-label="Message"
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <button
                type="submit"
                className="bg-green-600 text-white rounded-lg p-2 w-full hover:bg-green-700 transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
