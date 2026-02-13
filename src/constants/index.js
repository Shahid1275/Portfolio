const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Why me",
    link: "#features",
  },
];

const words = [
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
  { text: "Ideas", imgPath: `${import.meta.env.BASE_URL}images/ideas.svg` },
  { text: "Concepts", imgPath: `${import.meta.env.BASE_URL}images/concepts.svg` },
  { text: "Designs", imgPath: `${import.meta.env.BASE_URL}images/designs.svg` },
  { text: "Code", imgPath: `${import.meta.env.BASE_URL}images/code.svg` },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of experience" },
  { value: 85, suffix: "%", label: "Complex Problems Solver" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 8, suffix: "+", label: "Technologies Master" },
];

const logoIconsList = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.svg`,
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/logos/node.svg`,
  },
];

const abilities = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/seo.svg`,
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/chat.svg`,
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/time.svg`,
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const expCards = [
  {
    imgPath: `${import.meta.env.BASE_URL}images/person.svg`,
    title: "Punjab College - FSc Pre-Medical",
    institution: "Punjab College",
    date: "2019 - 2021",
    responsibilities: [
      "Completed intermediate education with focus on Biology, Chemistry, and Physics",
      "Participated in science exhibitions and competitions",
      "Maintained excellent academic record throughout",
    ],
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/person.svg`,
    title: "Virtual University of Pakistan - BS Computer Science",
    institution: "Virtual University of Pakistan",
    date: "November 2021 - August 2025 ",
    responsibilities: [
      "Studying core computer science subjects including Data Structures, Algorithms, and Database Systems",
      "Working on academic projects involving web development and software engineering",
      "Maintaining a strong GPA while gaining practical skills",
    ],
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/exp3.svg`,
    title: "Full Stack Developer",
    institution: "Virtual University's -IT Department", // Replace with actual company name
    date: "October 2024 - August 2025 ",
    responsibilities: [
      "Built internal web tools to automate administrative workflows",
      "Designed intuitive user interfaces using React and Tailwind CSS",
      "Maintained backend services and integrated databases for reliability",
    ],
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/exp3.svg`,
    title: "Full Stack Developer",
    institution: "724.one Pvt Ltd",
    date: "September 2025 - Present",
    responsibilities: [
      "Implemented customer-facing features and interactive dashboards with React",
      "Optimized performance and reduced initial load times across pages",
      "Worked closely with product and QA to ship incremental releases",
    ],
  },
  {
    imgPath: `${import.meta.env.BASE_URL}images/devices.svg`,
    title: "Full Stack Developer Intern",
    institution: "Ultra Codes Pvt Ltd",
    date: "July 2024 - September 2024",
    responsibilities: [
      "Contributed to frontend features using React and component-driven development",
      "Integrated RESTful APIs and optimized load performance",
      "Participated in code reviews and Agile team sprints to deliver features",
    ],
  },
];

const expLogos = [
  {
    name: "git",
    imgPath: `${import.meta.env.BASE_URL}images/logos/git.svg`,
  },
  {
    name: "mongodb",
    imgPath: `${import.meta.env.BASE_URL}images/logos/mongodb.svg`,
  },
  {
    name: "react",
    imgPath: `${import.meta.env.BASE_URL}images/logos/react.svg`,
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: `${import.meta.env.BASE_URL}images/insta.svg`,
  },
  {
    name: "fb",
    imgPath: `${import.meta.env.BASE_URL}images/fb.svg`,
  },
  {
    name: "x",
    imgPath: `${import.meta.env.BASE_URL}images/x.svg`,
  },
  {
    name: "linkedin",
    imgPath: `${import.meta.env.BASE_URL}images/linkedin.png`,
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  navLinks,
};
