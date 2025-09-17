// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import docker from "./assets/tech_logo/docker.png";
import aws from "./assets/tech_logo/aws.jpg";
import nginx from "./assets/tech_logo/nginx.png";
import django from "./assets/tech_logo/django.png";
import flask from "./assets/tech_logo/flask.png";
import go from "./assets/tech_logo/go.png";
import n8n from "./assets/tech_logo/n8n.png";
import redis from "./assets/tech_logo/redis.png";

// Experience Section Logo's
import medius_logo from "./assets/company_logo/medius_logo.jpg";
import Netpeace from "./assets/company_logo/Netpeace.png";
import rc_logo from "./assets/company_logo/rc_logo.png";

// Education Section Logo's
import akgec_Logo from "./assets/education_logo/akgec_logo.png";
import vvps_Logo from "./assets/education_logo/vvps_logo.jpeg";

// Project Section Logo's
import socialhub from "./assets/work_logo/socialhub.png";
import userauthentication from "./assets/work_logo/user-authentication.jpg";
import apigateway from "./assets/work_logo/apigateway.jpg";
import healthcare from "./assets/work_logo/healthcare.webp";
import internaltransfer from "./assets/work_logo/internaltransfer.jpg";
import twitterapi from "./assets/work_logo/twitterapi.avif";
import datavisualization from "./assets/work_logo/datavisualization.webp";
import chatapp from "./assets/work_logo/chatapp.avif";
import ecommerce from "./assets/work_logo/ecommerce.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", logo: django },
      { name: "Flask", logo: flask },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Redis", logo: redis },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Golang", logo: go },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Docker", logo: docker },
      { name: "AWS", logo: aws },
      { name: "Nginx", logo: nginx },
      { name: "n8n", logo: n8n },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Netpeace,
    role: "Software Developer Intern",
    company: "Auctopus Technologies PVT.LTD",
    date: "Mar 2025- Present",
    desc: " Developed IPAM services for efficient management of IP addresses and Subnets. Built Compliance Management features to automate configuration validation and enforce network policies. Designed Workflows for different Device Types, enabling automated operations across varied network devices.",
    skills: [
      "Python",
      "Django",
      "JavaScript",
      "React JS",
      "Redux",
      "PostgreSQL",
    ],
  },
  {
    id: 1,
    img: medius_logo,
    role: "Python Development Intern",
    company: "Medius Technology LTD",
    date: "Aug 2024- Oct 2024",
    desc: " Developed a web application for Excel/CSV uploads, summary reports, and automated email notifications. Deployed the application on an server, ensuring efficient collaboration through Git version control. Streamlined data processing and reporting with automated workflows and version-controlled deployment.",
    skills: ["Python", "Django", "ReactJS", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    id: 2,
    img: rc_logo,
    role: "Team Leader",
    company: "Robotics Club- AKGEC",
    date: "Oct 2022- May 2025",
    desc: "Contributed as a member of the 30-person Robotics Club Team, participating in various competitions including ABU Robocon. Designed and implemented Innovative Robotic Solutions, aiding the team’s success in National and International Competitions.",
    skills: ["Arduino IDE", "Embeded C++", "OpenCV", "3D Modeling", "PCB Designing", "Fabrication"],
  },
];

export const education = [
  {
    id: 0,
    img: akgec_Logo,
    school: "Ajay Kumar Garg Engineering College, Ghaziabad",
    date: "Nov 2021 - July 2025",
    grade: "7.81 CGPA",
    desc: "I have completed my Bachlor's degree (B-Tech) in Artificial Intelligence & Machine Learning from Ajay Kumar Garg Engineering College, Ghaziabad. During my time AKGEC, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at AKGEC has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - BTech (AI & ML)",
  },
  {
    id: 1,
    img: vvps_Logo,
    school: "Vindhya Valley Public School, Chandauli",
    date: "Apr 2018 - March 2020",
    grade: "78%",
    desc: "I completed my class 12 education from Vindhya Valley Public School, Chandauli, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 2,
    img: vvps_Logo,
    school: "Vindhya Valley Public School, Chandauli",
    date: "Apr 2016 - March 2018",
    grade: "74.5%",
    desc: "I completed my class 10 education from Vindhya Valley Public School, Chandauli, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Social Hub",
    description:
      "SocialHub is a full-stack social media application built using React for the frontend and Django + MySQL for the backend. The platform allows users to interact through posts and offers a responsive UI backed by robust APIs. It features JWT-based authentication, ensuring secure user sessions and data protection.",
    image: socialhub,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Python", "Django", "MySQL"],
    github:
      "https://github.com/anurag8773/SocialHub",
    //webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "User Authentication System",
    description:
      "This repository contains a robust user authentication system built using Django. It includes features such as login, signup, password reset, email verification, and profile management, ensuring a secure and user-friendly experience.",
    image: userauthentication,
    tags: [,
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Django"
      
    ],
    github: "https://github.com/anurag8773/User-Authentication-System",
   //webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "API GateWay",
    description:
      "This repository contains a microservices-based project that leverages Django for backend development and Flask for additional API handling. It demonstrates a seamless integration of two frameworks with RabbitMQ as a message broker and MySQL as the database. The project showcases efficient inter-service communication and data management.",
    image: apigateway,
    tags: ["Python", "Django", "Flask", "RabbitMQ", "JavaScript", "Docker"],
    github: "https://github.com/anurag8773/API-GateWay",
    //webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Healthcare Backend System",
    description:
      "A Healthcare Backend System built with Django, Django REST Framework, PostgreSQL, and JWT Authentication.It provides a secure RESTful API to manage patients, doctors, and their mappings with authentication and authorization for protected resources.",
    image: healthcare,
    tags: ["Python", "Django", "PostgreSQL", "REST API", "JWT"],
    github: "https://github.com/anurag8773/Healthcare-Backend",
    //webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Internal Money Transfers App",
    description:
      "A Golang Application to handle internal financial transactions between accounts, with data persistence using PostgreSQL. It features RESTful API endpoints for creating accounts, transferring funds, and retrieving account details, ensuring secure and efficient money management.",
    image: internaltransfer,
    tags: ["Golang", "PostgreSQL", "Docker", "gorilla/mux"],
    github: "https://github.com/anurag8773/Internal-Transfers-App",
    //webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Twitter/X Trending Topics Fetcher",
    description:
      "This project fetches the latest trending topics from a specified platform (e.g., Twitter/X) using Selenium, stores the results in a MongoDB database, and allows a frontend (HTML) to interact with the backend (Flask) to display the results.",
    image: twitterapi,
    tags: ["Python", "Flask", "Selenium", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/anurag8773/Trending-Topics-Fetcher",
    //webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Data Visualization Application",
    description:
      "A MERN stack application for graphical representation of JSON data using Chart.js. Users can upload JSON files, which are parsed and visualized through various chart types. The app features a responsive design, user authentication, and data persistence with MongoDB.",
    image: datavisualization,
    tags: ["React JS", "Redux", "Node.js", "MongoDB", "Express", "Chart.js", "CSS", "JavaScript"],
    github: "https://github.com/anurag8773/Data_Visualization_MERN-",
    //webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Chat App",
    description:
      "A real-time chat application built with React.js for the frontend and Django Channels for the backend. It enables users to join chat rooms and exchange messages instantly, leveraging WebSockets for seamless communication.",
    image: chatapp,
    tags: ["React JS", "API", "Python", "CSS", "Javascript", "Django", "WebSocket"],
    github: "https://github.com/anurag8773/Chat_App_WebSocket_Dj",
    //webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "E-Commerce application",
    description:
      "This Django-based E-Commerce project provides a comprehensive platform for creating an online store with essential functionalities like user signup, cart management, various payment options, and email verification through automatically generated tokens for enhanced security.",
    image: ecommerce,
    tags: ["Python", "Django", "JavaScript", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/anurag8773/Django_E-Commerce-Project",
    //webapp: "https://removeyourbg.netlify.app/",
  },
];
