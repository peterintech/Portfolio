import Heading from "@/components/homepage/ui/Heading";
import TestimonialForm from "@/components/homepage/forms/testimonialForm";

export default function TestimonialsPage() {
  return (
    <main className="container-x py-20">
      <section className="w-full">
        <div className="mb-12 text-center">
          <Heading text="Share Your" strong="Experience" />
          <p className="text-accent mt-4 text-lg">
            Your feedback means the world to me. If you&apos;ve worked with me
            and had a great experience, I&apos;d love for you to share your
            testimonial here. Simply fill out the form below
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 md:p-12">
          <TestimonialForm />
        </div>
      </section>
    </main>
  );
}
