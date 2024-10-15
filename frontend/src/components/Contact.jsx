import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigateTo = useNavigate();

  const handleContactForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send("service_7mnaucb", "template_4t91yis", templateParams, {
        publicKey: "1rCq8Ntv5__ejklGJ",
      })
      .then(
        () => {
          toast.success("Thank You! Your message has been sent successfully.");
          setLoading(false);
          navigateTo("/");
        },
        (err) => {
          toast.error("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="w-full ml-0 m-0 h-fit px-5 pt-10 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
        <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
          <div className="mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-2 justify-center rounded-md">
            <h1 className="text-[#d6482b] text-2xl font-bold m-2 min-[480px]:text-2xl xl:text-3xl 2xl:text-4xl">
              Contact Us
            </h1>
            <form
              onSubmit={handleContactForm}
              className="flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">Your Name</label>
                <input
                  type="text"
                  value={name}
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">Your Email</label>
                <input
                  type="email"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  required={true}
                  maxLength="10"
                  minLength="10"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-[16px] text-stone-500">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#d6482b] w-[280px] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto my-4"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
