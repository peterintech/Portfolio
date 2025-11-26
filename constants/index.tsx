const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/#about", label: "About" },
  { path: "/#experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/#contact", label: "Contact" },
];
const socialLinks = [
  {
    name: "github",
    link: "https://github.com/peterintech",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          strokeWidth={2}
          stroke="var(--lightBlue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24 2.5a21.5 21.5 0 0 0-6.8 41.9c1.08.2 1.47-.46 1.47-1v-3.65c-6 1.3-7.24-2.88-7.24-2.88A5.7 5.7 0 0 0 9 33.68c-1.95-1.33.15-1.31.15-1.31a4.52 4.52 0 0 1 3.29 2.22c1.92 3.29 5 2.34 6.26 1.79a4.6 4.6 0 0 1 1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.3 8.3 0 0 1 2.22-5.77a7.68 7.68 0 0 1 .21-5.69s1.8-.58 5.91 2.2a20.46 20.46 0 0 1 10.76 0c4.11-2.78 5.91-2.2 5.91-2.2a7.74 7.74 0 0 1 .21 5.69a8.28 8.28 0 0 1 2.21 5.77c0 8.26-5 10.07-9.81 10.61a5.12 5.12 0 0 1 1.46 4v5.9c0 .71.39 1.24 1.48 1A21.5 21.5 0 0 0 24 2.5"
        ></path>
      </svg>
    ),
  },
  {
    name: "discord",
    link: "https://www.discord.com/peterintech/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          strokeWidth={2}
          stroke="var(--lightBlue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.59 34.173A49 49 0 0 1 14.68 38C7.3 37.79 4.5 33 4.5 33a44.8 44.8 0 0 1 4.81-19.52A16.47 16.47 0 0 1 18.69 10l1 2.31A33 33 0 0 1 24 12a33 33 0 0 1 4.33.3l1-2.31a16.47 16.47 0 0 1 9.38 3.51A44.8 44.8 0 0 1 43.5 33s-2.8 4.79-10.18 5a47 47 0 0 1-2.86-3.81m6.46-2.9c-3.84 1.945-7.555 3.89-12.92 3.89s-9.08-1.945-12.92-3.89"
        ></path>
        <circle
          cx="17.847"
          cy="26.23"
          r="3.35"
          fill="none"
          stroke="var(--lightBlue)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
        <circle
          cx="30.153"
          cy="26.23"
          r="3.35"
          fill="none"
          stroke="var(--lightBlue)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
      </svg>
    ),
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/peterintech",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 48 48"
      >
        <circle
          cx="15.64"
          cy="13.46"
          r=".75"
          stroke="var(--lightBlue)"
        ></circle>
        <path
          fill="none"
          stroke="var(--lightBlue)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.64 16.93v14.98m17.47 0V22.3a5.83 5.83 0 0 0-5.82-5.82a5.83 5.83 0 0 0-5.83 5.82v9.61m0-9.61v-5.37"
        ></path>
        <path
          fill="none"
          stroke="var(--lightBlue)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2"
        ></path>
      </svg>
    ),
  },
  {
    name: "x",
    link: "https://x.com/Peterintech",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          strokeWidth={2}
          stroke="var(--lightBlue)"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z"
        ></path>
      </svg>
    ),
  },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];
const gridItems = [
  {
    id: 1,
    title: "I prioritize transparency and open communication",
    description: "",
    className:
      "md:col-span-1 row-span-2 col-span-2 md:min-h-[60vh] min-h-[40vh]",
    titleClassName: "justify-end",
    img: "/transparency.png",
  },
  {
    id: 2,
    title: "I’m very flexible with time zone communications.",
    description: "",
    className: "md:col-span-1 col-span-2",
    titleClassName: "justify-start",
    img: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-1 col-span-2",
    titleClassName: "justify-center",
    img: "",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/react.png",
  },
  {
    name: "Mobile App Developer",
    imgPath: "/react-native.png",
  },
  {
    name: "NextJS Developer",
    imgPath: "/next.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/three.png",
  },
];
const expCards = [
  {
    review:
      "Peter brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: "/teeket-logo.png",
    title: "Frontend Engineer",
    date: "January 2025 - present",
    responsibilities: [
      "Optimized and scaled the halfway-built event management platform, thereby improving overall performance by over 80%.",
      "Refactored legacy codebases to enhance maintainability and scalability",
      "Collaborated closely with UI/UX designers and backend developers to ensure functionality and seamless user experiences.",
    ],
  },
  {
    review:
      "Peter's contributions to our startup have been outstanding. He approaches challenges with a problem-solving mindset and creativity",
    logoPath: "/cryptnance-logo.png",
    title: "Frontend Engineer",
    date: "June 2023 - December 2024",
    responsibilities: [
      "Spearheaded the development of cryptnance's crypto fintech platform",
      "Collaborated closely with UI/UX designers and backend developers to ensure functionality and seamless user experiences.",
      "Implemented a real-time transaction monitoring dashboard, increasing administrative efficiency",
      "Optimized the web application for maximum speed and scalability.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];
const projects = [
  {
    title: "Cryptnance",
    url: {
      github: "#",
      live: "https://cryptnance.africa/",
      image: "/cryptnance-img.png",
    },
    description:
      "A crypto fintech web application for a startup for sending and receiving crpto and fiat funds. I am the Lead Frontend Engineer handling this project. Built majorly with React and Redux.",
    stack: "React.js, Redux, Tailwindcss",
  },
  {
    title: "Teeket",
    url: {
      github: "#",
      live: "https://www.teeketafrica.com/",
      image: "/teeket.png",
    },
    description:
      "An event management platform that allows users to create, manage, and attend events seamlessly. I'm responsible for building interactive interfaces, optimizing and scaling the platform.",
    stack: "React, Chakra UI and Tailwindcss",
  },
  {
    title: "The Magnifique Sphere",
    url: {
      github: "#",
      live: "https://themagnifiquesphere.com.ng/",
      image: "/magnifique.png",
    },
    description:
      "A microfinance company providing services inclusive of loan offering, savings and the likes. I designed based on the effective communication with the client and built the project from ground up",
    stack: "React, Typescript and Tailwindcss",
  },
  {
    title: "Kong Dynasty",
    url: {
      github: "#",
      live: "https://kongdynasty.org/",
      image: "/kong.png",
    },
    description:
      "A fundraising platform offering investment opportunities for visitors, with integrated payment system. I built the project from ground up",
    stack: "React, Typescript and Tailwindcss",
  },
  {
    title: "Echelon Trust LTD",
    url: {
      github: "#",
      live: "https://echelontrust.com.ng/",
      image: "/echelon.png",
    },
    description:
      "A company that offers financial services inclusive of offering loans, savings, professional financial advisory and investment option. I designed and built the project from ground up",
    stack: "React and Tailwindcss",
  },
  {
    title: "Zayth Driver App",
    url: {
      github: "",
      live: "mobileapp",
      image: "/zayth.png",
    },
    description:
      "A mobile app for drivers to manage their trips and earnings. Built by integrated GPS tracking, real-time order updates, and delivery status notifications to enhance the customer experience and ensure efficient delivery operations.",
    stack: "React Native CLI, Redux, Google Maps API, Firebase",
  },

  {
    title: "My Portfolio",
    url: {
      github: "https://github.com/iampitrus/My-portfolio",
      live: "/",
      image: "/portfolio.png",
    },
    description: "My web Portfolio",
    stack: "Next.js, Tailwind Css",
  },
];

export {
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackImgs,
  menuLinks,
  socialLinks,
  gridItems,
  projects,
};
