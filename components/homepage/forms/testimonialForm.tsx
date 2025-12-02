"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SubmissionModal from "./submissionModal";
import Button from "../ui/button";

interface TestimonialFormProps {
  onSuccess?: () => void;
}

export default function TestimonialForm({ onSuccess }: TestimonialFormProps) {
  const [loading, setLoading] = useState(false);
  const [uploadedImagePath, setUploadedImagePath] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [modal, setModal] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });
  const [form, setForm] = useState({
    name: "",
    title: "",
    review: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Invalid File",
        message: "Please upload a valid image file",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setModal({
        isOpen: true,
        type: "error",
        title: "File Too Large",
        message: "Image must be smaller than 5MB",
      });
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload image to server
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      setUploadedImagePath(data.path);
    } catch (err) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Upload Failed",
        message: err instanceof Error ? err.message : "Failed to upload image",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          imgPath: uploadedImagePath,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit testimonial");
      }

      setModal({
        isOpen: true,
        type: "success",
        title: "Thank You!",
        message:
          "Your testimonial has been submitted successfully. Thanks for the recommendation!",
      });
      setForm({ name: "", title: "", review: "" });
      setUploadedImagePath("");
      setPreviewImage("");

      if (onSuccess) onSuccess();
    } catch (err) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Submission Failed",
        message:
          err instanceof Error
            ? err.message
            : "An error occurred while submitting your testimonial",
      });
      console.error("Error:", err);
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

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto flex flex-col gap-6"
      >
        <div className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="contact-form">
          <label htmlFor="title">Your Title/Role</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="CEO at Company X"
            required
          />
        </div>

        <div className="contact-form">
          <label htmlFor="review">Your Testimonial</label>
          <textarea
            id="review"
            name="review"
            value={form.review}
            onChange={handleChange}
            placeholder="Share your experience working with me..."
            required
            rows={6}
            className="contact-input"
          />
        </div>

        <div className="contact-form">
          <label htmlFor="image">Profile Image (Optional)</label>
          <div className="flex flex-col gap-2">
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="contact-input cursor-pointer"
            />
            {previewImage && (
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-300">
                <Image
                  width={30}
                  height={30}
                  src={previewImage || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-full rounded-full aspect-square object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <Button
          type="submit"
          text={loading ? "Submitting..." : "Submit Testimonial"}
          className="w-full h-12"
          icon={<ArrowRight />}
          disabled={loading}
        />
      </form>
    </>
  );
}
