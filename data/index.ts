import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { 
    name: "Resume", 
    link: "/Resume.pdf",
    download: true,
    fileName: `${links.ownerName}_Resume.pdf`
  },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
 {
  id: 3,
  title: "My tech stack",
  description: "I constantly try to improve",
  className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  imgClassName: "",
  titleClassName: "justify-center",
  img: "", 
  spareImg: "", 
},

  {
    id: 4,
    title: "Tech enthusiast driven by a passion for building intelligent solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "TrendHive - Fashion E-Commerce Platform",
    des: "A collaborative design tool with real-time collaboration, vector editing, and a responsive UI.",
    img: "/file.svg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg"],
    sourceCode: "https://github.com/codeMaestro78/TrendHive_ECommerce_Platform",
  },
  {
    id: 2,
    title: "Blockchain-tx-ui – A Developer-Friendly NPM Package for Blockchain Transaction UIs ",
    des: 'A lightweight and customizable NPM package for visualizing blockchain transactions in your web apps.',
    img: "/download.jpeg",
    iconLists: ["/re.svg", "/tail.svg"],
    sourceCode:"https://github.com/codeMaestro78/blockchain-tx-ui"
  }
] as const;

export const workExperience = [
  {
    id: 1,
    title: "AIML Intern",
    desc: "Worked on market segmentation to help small and medium businesses in identifying opportunities using ai agents,Contributed market segment financial models to aid in decision making.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/codeMaestro78",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/devarshilalani05",
  },
] as const;

export const techStack = {
  stack1: [
    "Java",
    "C++",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Python",
    "AI/ML",
    "Django",
    "MERN Stack",
    "Bootstrap 4 & 5"
  ],
  stack2: [
    "NumPy",
    "Pandas",
    "Matplotlib",
    "TensorFlow",
    "YFinance",
    "Git",
    "Postman",
    "Streamlit",
    "AWS (EC2, S3)",
    "Google Cloud"
  ]
} as const;