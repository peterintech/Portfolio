import GlowCard from "../ui/glowCard";
import Heading from "../ui/Heading";
import Image from "next/image";
import { headers } from "next/headers";

interface Testimonial {
  name: string;
  title: string;
  review: string;
  imgPath: string;
}

const Testimonials = async () => {
  let testimonials: Testimonial[] = [];

  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const apiUrl = `${protocol}://${host}/api/testimonials`;

    const response = await fetch(apiUrl, { cache: "no-store" });
    if (response.ok) {
      testimonials = await response.json();
    }
  } catch (error) {
    console.log("Failed to fetch testimonials:", error);
  }

  if (testimonials.length === 0) return;

  return (
    <section id="testimonials" className="container-x py-20">
      <div className="w-full h-full">
        <Heading text="What People Say" strong="About Me" />
        <p className="-mt-6 mb-8 text-accent">
          I&apos;ve helped founders, startups, and businesses bring their ideas
          to life. Here&apos;s what some of them have to say
        </p>

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <Image
                    height={40}
                    width={40}
                    src={testimonial.imgPath || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="rounded-full aspect-square"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-300">{testimonial.name}</p>
                  <p className="text-accent text-sm">{testimonial.title}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
