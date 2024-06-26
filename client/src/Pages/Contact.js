import React,{useRef} from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault(); // prevents the page from reloading when you hit “Send”
    
        emailjs
          .sendForm(
            "service_kmtmbme",
            "template_ifbo3wu",
            form.current,
            "VY1iGtsx-5BLLo3k6"
          )
          .then(
            (result) => {
              console.log('success');
              form.current.reset();
            },
            (error) => {
              console.log(error);
              form.current.reset();
            }
          );
      };
  return (
    <div id="6">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div
        style={{
          backgroundImage: "url(/images/contact.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "1.4rem",
            fontWeight: "bolder",
          }}
        >
          Contact Me
        </h1>
        <div
          className="flex flex-col items-center md:flex flex-col"
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          <div className="mb-4">
            <h2>Name</h2>
            <input
              className="border-2 border-green-400 rounded-lg pes"
              type="text"
              name="from_name"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <h2>Email</h2>
            <input
              className="border-2 border-green-400 rounded-lg pes"
              type="email"
              name="from_email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <h2>Message</h2>
            <textarea
              className="border-2 border-green-400 rounded-lg pes"
              placeholder="Enter your Message"
              style={{ height: "100px" }}
              name="message"
            />
          </div>
          <div className="mb-4">
            <button type="submit" style={{backgroundColor:"rgb(36, 212, 111)",borderRadius:"10px",padding:"3px",width:"90px",alignContent:"center",alignItems:"center",marginLeft:"10%"}}>Send</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Contact;
