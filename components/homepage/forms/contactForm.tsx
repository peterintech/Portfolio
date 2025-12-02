"use client";

import type React from "react";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/button";
import SubmissionModal from "./submissionModal";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
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
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        console.error("Failed to send email:", response.statusText);
        throw new Error("Failed to send email");
      }

      setModal({
        isOpen: true,
        type: "success",
        title: "Message Sent!",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Oops!",
        message:
          err instanceof Error
            ? `${err.message}. Please try again later.`
            : "An error occurred while sending your message.",
      });
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SubmissionModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
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
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <Button
            type="submit"
            text={loading ? "Sending..." : "Send Message"}
            className="w-80 h-12"
            id="counter"
            icon={<ArrowRight />}
            disabled={loading}
          />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
