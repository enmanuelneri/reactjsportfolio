type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Enmanuel Uscuvilca — Portfolio",
    fullName: "Enmanuel Uscuvilca Loayza",
    email: "enmanuel.uscuvilca@gmail.com",
  },
  hero: {
    name: "Enmanuel Uscuvilca",
    p: ["I develop software solutions, bots, ", "AI projects, and adapt systems to specific changes."],
  },
  contact: {
    p: "Get in touch/Ponerse en contacto",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name/Tu nombre",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email/Tu correo", placeholder: "What's your email?" },
      message: {
        span: "Your Message/Tu mensaje",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `
        I master software development and the implementation of innovative technological solutions. I thrive in dynamic environments, always seeking professional growth. My creativity and organization have significantly impacted my projects. With experience across various industries and technologies, I eagerly anticipate new challenges and projects.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Education",
      h2: "Education and Certifications",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `As an Architecture and Development Analyst, I have accumulated a wide range of technical skills and experience in software development. I have worked on a variety of projects, from the implementation of SMS sending services and the creation of bots for request validation, to the development of billing systems and the adaptation of existing systems to new ERP changes. My experience also includes the analysis and mapping of applications for high and portability processes in a telecommunications company, as well as the preparation of code quality control documents and prototypes for future user stories. I have also worked on Artificial Intelligence projects and developed a chatbot using Learning Language Models (LLM). Throughout my career, I have demonstrated my ability to work with a variety of technologies, including .Net Framework, .Net Core, Python, SQL, JavaScript, and more. My goal is to use my experience and skills to solve complex problems, work effectively with different technologies, and manage projects effectively.`,
    },
  },
};
