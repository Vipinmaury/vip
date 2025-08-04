// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.jpg';

import vpsLogo from './assets/education_logo/bsa_logo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
    ],  
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur",
      date: "June 2021 - June 2025",
      grade: "7.41 CGPA",
      desc: "I have completed my  B.Tech in Information Technology from Deen Dayal Upadhyaya Gorakhpur University, where I've built a strong foundation in programming, software development, and core computer science subjects like Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering. Actively participated in workshops and technical events to enhance my skills and practical knowledge."
,
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
    },
    
    {
  id: 2,
  img: vpsLogo,
  school: "V.S.A.V Inter College Gola, Gorakhpur",
  date: "Apr 2020 - May 2021", // Updated based on resume (May 2021)
  grade: "70%",
  desc: "I completed my class 12 education from V.S.A.V Inter College Gola, Gorakhpur, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
  degree: "UP Board (XII) - PCM",
},
{
  id: 3,
  img: vpsLogo,
  school: "V.S.A.V Inter College Gola, Gorakhpur",
  date: "Apr 2018 - May 2019", // Updated based on resume (May 2019)
  grade: "82%",
  desc: "I completed my class 10 education from V.S.A.V Inter College Gola, Gorakhpur, under the UP board, with a focus on Science and Mathematics.",
  degree: "UP Board (X) - Science and Mathematics",
}

  ];
  
  export const projects = [
  {
    id: 0,
    title: "EchoTalk",
    description:
      "A full-stack language exchange platform that enables users to connect globally through chat and video calls. Built with React.js, Node.js, MongoDB, and Stream API, it supports secure JWT-based authentication, dynamic UI theming, and real-time communication features.",
    image: githubdetLogo,
    tags: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "REST API", "Stream"],
    github: "https://github.com/Vipinmaury/EchoTalk",
    webapp: "https://drive.google.com/file/d/1HliJXmDpcfrtvYRlH1fynw8k9MiUFms5/view",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web application for online shopping. Features include product browsing, cart and order management, secure JWT-based authentication, and role-based access control for users and admins.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT", "Payment Gateway"],
    github: "https://github.com/Vipinmaury/E-Commerce",
    webapp: "https://github.com/Vipinmaury/E-Commerce",
  },
  {
    id: 2,
    title: "Job Portal",
    description:
      "A React-based job portal that allows users to explore job listings, apply for positions, and manage profiles. The platform features authentication, job filtering, and a modern, responsive interface for a smooth user experience.",
    image: movierecLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/Vipinmaury/jobportal",
    webapp: "https://jobportalvipin.netlify.app/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A front-end clone of the Netflix platform built using HTML, CSS, and JavaScript. It features a sleek UI and showcases a curated list of movies and shows with interactive styling for a modern streaming feel.",
    image: npmLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vipinmaury/Projects/tree/main/Netflix-Clone-main/Netflix-Clone-main",
    webapp: "https://github.com/Vipinmaury/Projects/tree/main/Netflix-Clone-main/Netflix-Clone-main",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A web-based weather forecasting app built with JavaScript and OpenWeather API. It allows users to search for city-specific weather updates with real-time data, temperature, and weather conditions.",
    image: taskremLogo,
    tags: ["JavaScript", "API", "HTML", "CSS"],
    github: "https://github.com/Vipinmaury/Projects/tree/main",
    webapp: "https://github.com/Vipinmaury/Projects/tree/main",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects, skills, and contact information. Built with HTML, CSS, and JavaScript, it includes smooth animations and a clean UI for a professional online presence.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vipinmaury/Portfolio",
    webapp: "https://vipinmaury.github.io/Vipin-Maurya-Portfolio/",
  },
];

    
  