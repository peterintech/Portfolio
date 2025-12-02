import { socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="container-x py-10">
      <div className="footer-container">
        <div>
          <a
            href="https://dev.to/peterintech"
            className="text-lightBlue hover:translate-x-3"
          >
            Visit my blog
          </a>
        </div>
        <div>
          <p>Built with ❤️ by me © {new Date().getFullYear()}</p>
        </div>
        <div className="socials">
          {socialLinks.map(({ link, icon }) => (
            <a key={link} href={link} className="icon">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
