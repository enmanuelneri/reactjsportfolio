import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  //meta,
  //starbucks,
  //tesla,
  dpworld,
  //shopify,
  //carrent,
  //jobit,
  //tripguide,
  threejs,
  ey,
  nttdata,
  indra,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "RPA Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Architecture and Development Analyst",
    companyName: "DP World",
    icon: dpworld,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Actualidad",
    points: [
      "Development and Implementation of the SMS sending service for sending tokens in the appointment generation process. It was developed using .Net Core, React JS, Git for version control, and SQL for audit logging. Unit tests with NUnit, Functional tests using .",
      "Implementation of Terminal Package functionality in the Billing module, .net core, Javascript, HTML5, CSS were used. Unit tests with NUnit, Functional tests using Selenium.",
      "Creation of functional tests for the Appointments and Documentation module using Selenium for invoice validations.",
      "Creation of bots for automatic login in N4 and Sparcs applications. The Selenium library with Python was used for the web application and Pywinauto for the desktop application, as a task scheduler the Task Manager.",
    ],
  },
  {
    title: "Solutions Analyst",
    companyName: "EY",
    icon: ey,
    iconBg: "#383E56",
    date: "Sept 2022 - May 2023",
    points: [
      "Development of the BTA Billing System, which is a maintenance of the hours and the calculation of the charge of hours to the client depending on the cost either by average or Rank of the employees; generation of reports by Rank or by average. It was developed using .Net Core, React JS and as a BD manager Sql Server. Unit tests with NUnit, Functional tests using Selenium.",
      "Adaptation of the Opportunity Base System to the new ERP change to Profitability. It was developed using .Net Core, React JS, Javascript, HTML5, CSS and as a BD manager Sql Server. Unit tests with NUnit, Functional tests using Selenium and vulnerability analysis with SonarQube.",
      "Elaboration of the Fixed Assets Validation flow in Integration Services. Sql was used for the storage of the records and Python for the validation of the rules.",
      
    ],
  },  
  {
    title: "Web Developer",
    companyName: "NTT Data",
    icon: nttdata,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Indra",
    icon: indra,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [/*
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects: TProject[] = [/*
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
*/];

export { services, technologies, experiences, testimonials, projects };
//export { services, technologies, experiences };