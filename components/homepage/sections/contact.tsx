import Heading from "../ui/Heading";
import ContactForm from "../forms/contactForm";
import dynamic from "next/dynamic";

const ContactExperience = dynamic(() => import("../models/contactExperience"));

const Contact = () => {
  return (
    <section id="contact" className="flex-center container-x py-20">
      <div className="w-full h-full">
        <Heading text="Have a Project" strong="in Mind?" />
        <div className="contact-layout">
          <div className="max-w-lg w-full z-100">
            <ContactForm />
          </div>

          <figure>
            <div className="contact-3d-layout">
              <ContactExperience />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Contact;
