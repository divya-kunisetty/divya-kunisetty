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
    oracle,
    math,
    lmartin,
    pintos,
    jobit,
    tripguide,
    threejs,
    edge_in_tech,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  
  const technologies = [
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Undergraduate Research Assistant",
      company_name: "EDGE in Tech™ Initiative at UC",
      icon: edge_in_tech,
      iconBg: "#EFF9FF",
      date: "Jan 2021 - Jan 2022",
      points: [
        "Collaborated with the Gender Fair CEO to formulate a gender equity-based metric for over 300 universities.",
        "Evaluating each school's gender equity policies and data accessibility practices to determine an equity and transparency score.",
        "Publishing results of the research to the Gender Fair website to help prospective applicants and employees expedite their university or job search.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "MathPro",
      icon: math,
      iconBg: "#FEFEFF",
      date: "May 2021 - Sep 2021",
      points: [
        "Devloping at MathPro, a student-led startup that generates customizable math worksheets to supplement online education resources.",
        "Contributing 250+ problem sets to the Algebra I database.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Lockheed Martin",
      icon: lmartin,
      iconBg: "#0C2552",
      date: "June 2022 - Aug 2023",
      points: [
        "Joining the Innovation Framework Team to integrate IT management solutions on the ServiceNow platform using JavaScript and REST APIs.",
        "Writing server-side scripts and integration workflows to enhance internal applications such as onboarding/offboarding services and technology requests.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Oracle",
      icon: oracle,
      iconBg: "#FFF4E6",
      date: "May 2023 - Present",
      points: [
        "Working on the Oracle Analytics Cloud team to build a dbt (data build tool) platform that effectively transforms data while ensuring data quality.",
        "Creating a demo account with twenty SQL and machine learning use cases and a corresponding user guide manual to facilitate in onboarding new users to the platform.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "PintOS Operating System",
      description:
        "Extending the Pintos Operating System functionality to handle user processes, multi thread scheduling, system call interfacing, virtual memory, extensible files, and other operating system features.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "operatingsystem",
          color: "green-text-gradient",
        },
        {
          name: "multithreading",
          color: "pink-text-gradient",
        },
      ],
      image: pintos,
    },
    {
      name: "End-to-End Encrypted File Sharing System",
      description:
        "Developing a robust Client API for a secure file sharing system with user authentication, file storage, sharing, and access revocation.",
      tags: [
        {
          name: "go",
          color: "blue-text-gradient",
        },
        {
          name: "security",
          color: "green-text-gradient",
        },
        {
          name: "ginkgo",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
    },
    {
      name: "Database",
      description:
        "Constructing a B+ tree class for a SQL relational database with dynamic multilevel file indexing, query optimization, and a concurrency lock manager for improved performance and efficiency.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "recovery",
          color: "green-text-gradient",
        },
        {
          name: "locks",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
    },
  ];
  
  export { technologies, experiences, projects };