import Heading from "../ui/Heading";
import ContactExperience from "../models/contactExperience";
import ContactForm from "../forms/contactForm";

const Contact = () => {
  return (
    <section id="contact" className="flex-center container-x py-20">
      <div className="w-full h-full">
        <Heading text="Have a Project" strong="in Mind?" />
        <div className="flex md:flex-row gap-6 flex-col mt-10 w-full items-center">
          <div className="flex-1">
            <ContactForm />
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
