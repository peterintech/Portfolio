"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Check, X } from "lucide-react";
import { useGSAP } from "@gsap/react";

interface SubmissionModalProps {
  isOpen: boolean;
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}

export default function SubmissionModal({
  isOpen,
  type,
  title,
  message,
  onClose,
}: SubmissionModalProps) {
  const tl = useRef<gsap.core.Timeline | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose();
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(modalRef.current, {
          opacity: 1,
          duration: 0.3,
          pointerEvents: "auto",
        })
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            scale: 0.8,
            y: -20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out",
          }
        );
    },
    { scope: modalRef }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  const bgColor = type === "success" ? "bg-green-900/20" : "bg-red-900/20";
  const borderColor =
    type === "success" ? "border-green-500" : "border-red-500";
  const textColor = type === "success" ? "text-green-400" : "text-red-400";
  const Icon = type === "success" ? Check : X;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-20 backdrop-blur-sm opacity-0 pointer-events-none"
      onClick={handleClose}
    >
      <div
        ref={contentRef}
        className={`${bgColor} border ${borderColor} rounded-lg p-8 max-w-md w-full mx-4 flex flex-col items-center gap-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${textColor} p-3 rounded-full bg-black/30`}>
          <Icon size={32} />
        </div>

        <h3 className={`text-2xl font-bold ${textColor}`}>{title}</h3>

        <p className="text-gray-300 text-center text-sm">{message}</p>

        <button
          onClick={handleClose}
          className={`mt-4 px-6 py-2 rounded-lg cursor-pointer ${
            type === "success"
              ? "bg-green-500 hover:bg-green-600 text-black"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
