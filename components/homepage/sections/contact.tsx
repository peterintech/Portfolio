"use client";

import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

import Heading from "../ui/Heading";
import ContactExperience from "../models/contactExperience";
import { ArrowRight } from "lucide-react";
import Button from "../ui/button";

const Contact = () => {
  const formRef = useRef(null);
  //   const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true); // Show loading state

    // try {
    //   await emailjs.sendForm(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     formRef.current,
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   );

    //   // Reset form and stop loading
    //   setForm({ name: "", email: "", message: "" });
    // } catch (error) {
    //   console.error("EmailJS Error:", error); // Optional: show toast
    // } finally {
    //   setLoading(false); // Always stop loading, even on error
    // }
  };

  return (
    <section id="contact" className="flex-center container-x py-20">
      <div className="w-full h-full">
        <Heading text="Have a Project" strong="in Mind?" />
        <div className="flex md:flex-row gap-6 flex-col mt-10 w-full items-center">
          <div className="flex-1">
            <div className="flex-center rounded-xl">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div className="contact-form">
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form">
                  <label htmlFor="message">Your Message</label>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  text="Send Message"
                  className="w-80 h-12"
                  id="counter"
                  icon={<ArrowRight />}
                />
              </form>
            </div>
          </div>

          <figure className="flex-1">
            <div className="w-full h-full min-h-[300px]">
              <ContactExperience />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Contact;
