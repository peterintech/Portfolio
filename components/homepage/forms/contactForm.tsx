"use client";

import type React from "react";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/button";

const ContactForm = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
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
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
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

        {error && <div className="text-red-400 text-sm">Error: {error}</div>}
        {submitted && (
          <div className="text-green-400 text-sm">
            Thank you! Your message has been sent successfully.
          </div>
        )}

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
  );
};

export default ContactForm;
