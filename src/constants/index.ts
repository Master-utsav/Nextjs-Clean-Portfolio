
export const NavItems = [
    {
        name: "Home",
        path: "#home",
    },
    {
        name: "Tech",
        path: "#tech",
    },
    {
        name: "Projects",
        path: "#projects",
    },
    {
        name: "About",
        path: "#about",
    },
    {
        name: "Contact",
        path: "#contact",
    }
]

export const Frameworks = [
    {
        name: "Next.js",
        src: "/images/nextjs.png",
        description: "Powerful React framework with server-side rendering and static site generation."
    },
    {
        name: "Express.js",
        src: "/images/express.png",
        description: "Fast, minimalist backend framework for building robust server-side applications."
    },
    {
        name: "React Native + Expo",
        src: "/images/expo.png",
        description: "Cross-platform mobile framework with fast development and rich UI tools."
    },
];

export const Frontend = [
    {
        name: "React",
        src: "/images/color_react.png",
        description: "A JavaScript library for building user interfaces with a focus on interactive web apps."
    },
    {
        name: "TypeScript",
        src: "/images/typescript.png",
        description: "A typed superset of JavaScript that enhances code reliability and development efficiency."
    },
    {
        name: "Tailwind CSS",
        src: "/images/tailwind.png",
        description: "A utility-first CSS framework that streamlines the creation of modern, responsive web UIs."
    },
    {
        name: "Framer Motion",
        src: "/images/framer.png",
        description: "An animation library for React that creates smooth, declarative animations and interactions."
    },
    {
        name: "GSAP",
        src: "/images/gsap.png",
        description: "A powerful JavaScript library for complex animations and rich visual effects with timelines."
    },    
    {
        name: "Three.js",
        src: "/images/three_js.png",
        description: "A JavaScript library for creating 3D graphics and immersive visual experiences in the browser."
    }
];

export const Backend = [
    {
        name: "Node.js",
        src: "/images/node_js.png",
        description: "A runtime allowing JavaScript to build fast, scalable server-side applications efficiently."
    },
    {
        name: "MongoDB",
        src: "/images/mongo_db.png",
        description: "A NoSQL database that stores data in a flexible, JSON-like structure ideal for modern applications."
    },
    {
        name: "Redis",
        src: "/images/redis.png",
        description: "An in-memory data structure store, ideal for caching, real-time data, and task queuing needs."
    },
    // {
    //     name: "Prisma",
    //     src: "/images/prisma.png",
    //     description: "A powerful ORM that makes database queries easier and safer for Node.js and TypeScript apps."
    // },
    // {
    //     name: "PostgreSQL",
    //     src: "/images/postgre.png",
    //     description: "An advanced RDB offering data reliability and complex query support for developers."
    // },
    {
        name: "Firebase",
        src: "/images/firebase.png",
        description: "A versatile Google-backed platform with real-time databases, authentication, and cloud services."
    },
];

export interface TechStackItem {
    name: string;
    src: string;
  }
  
export interface Project {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    gitLink: string;
    liveLink: string;
    techStack: TechStackItem[];
  }

export const ProjectsData: Project[] = [
    {   id: 1,
        title: "Course Yuga",
        description: "Courses are Required to master any skill in this yuga, we offer you all the most advance and cost effective courses.",
        imageSrc: "/images/course_yuga_thumbnail.jpg",
        gitLink: "https://github.com/master-utsav/course-yuga",
        liveLink: "https://course-yuga.vercel.app",
        techStack: [
            {
                name: "React",
                src: "/images/color_react.png",
            },
            {
                name: "TypeScript",
                src: "/images/typescript.png",
            },
            {
                name: "Tailwind CSS",
                src: "/images/tailwind.png",
            },
            {
                name: "Framer Motion",
                src: "/images/framer.png",
            },
            {
                name: "Node.js",
                src: "/images/node_js.png",
            },
            {
                name: "Express",
                src: "/images/express.png",
            },
            {
                name: "MongoDB",
                src: "/images/mongo_db.png",
            },
        ]
    },
    {   
        id: 2,
        title: "ThreeJs Portfolio",
        description: "Explore my portfolio and reach out for remote collaborations to build websites and apps tailored to your needs.",
        imageSrc: "/images/threejs_portfolio.png",
        gitLink: "https://github.com/Master-utsav/Portfolio",
        liveLink: "https://master-utsav-portfolio.vercel.app",
        techStack: [
            {
                name: "React",
                src: "/images/color_react.png",
            },
            {
                name: "TypeScript",
                src: "/images/typescript.png",
            },
            {
                name: "Tailwind CSS",
                src: "/images/tailwind.png",
            },
            {
                name: "Three.js",
                src: "/images/three_js.png",
            },
            {
                name: "Framer Motion",
                src: "/images/framer.png",
            },
            {
                name: "GSAP",
                src: "/images/gsap.png",
            },
        ]
    },
    {
        id: 3,
        title: "KM Solar Energy",
        description: "This was just a frontend project, using nextjs just for SEO and there are some framer and gsap usages.",
        imageSrc: "/images/km_solar_energy.png",
        gitLink: "https://github.com/Master-utsav/KM-Solar-Energy",
        liveLink: "https://km-solar-pannel.vercel.app",
        techStack: [
            {
                name: "NextJs",
                src: "/images/nextjs.png",
            },
            {
                name: "TypeScript",
                src: "/images/typescript.png",
            },
            {
                name: "Tailwind CSS",
                src: "/images/tailwind.png",
            },
            {
                name: "Framer Motion",
                src: "/images/framer.png",
            },
            {
                name: "GSAP",
                src: "/images/gsap.png",
            },
        ]
    },
    {
        id: 4,
        title: "Course Yuga",
        description: "Courses are Required to master any skill in this yuga, we offer you all the most advance and cost effective courses.",
        imageSrc: "/images/course_yuga_thumbnail.jpg",
        gitLink: "https://github.com/master-utsav/course-yuga",
        liveLink: "https://course-yuga.vercel.app",
        techStack: [
            {
                name: "React",
                src: "/images/color_react.png",
            },
            {
                name: "TypeScript",
                src: "/images/typescript.png",
            },
            {
                name: "Tailwind CSS",
                src: "/images/tailwind.png",
            },
            {
                name: "Framer Motion",
                src: "/images/framer.png",
            },
            {
                name: "Node.js",
                src: "/images/node_js.png",
            },
            {
                name: "Express",
                src: "/images/express.png",
            },
            {
                name: "MongoDB",
                src: "/images/mongo_db.png",
            },
        ]
    },
    {
        id: 5,
        title: "ThreeJs Portfolio",
        description: "Explore my portfolio and reach out for remote collaborations to build websites and apps tailored to your needs.",
        imageSrc: "/images/threejs_portfolio.png",
        gitLink: "https://github.com/Master-utsav/Portfolio",
        liveLink: "https://master-utsav-portfolio.vercel.app",
        techStack: [
            {
                name: "React",
                src: "/images/color_react.png",
            },
            {
                name: "TypeScript",
                src: "/images/typescript.png",
            },
            {
                name: "Tailwind CSS",
                src: "/images/tailwind.png",
            },
            {
                name: "Three.js",
                src: "/images/three_js.png",
            },
            {
                name: "Framer Motion",
                src: "/images/framer.png",
            },
            {
                name: "GSAP",
                src: "/images/gsap.png",
            },
        ]
    },
    {
        id: 6,
        title: "KM Solar Energy",
        description: "This was just a frontend project, using nextjs just for SEO and there are some framer and gsap usages.",
        imageSrc: "/images/km_solar_energy.png",
        gitLink: "https://github.com/Master-utsav/KM-Solar-Energy",
        liveLink: "https://km-solar-pannel.vercel.app",
        techStack: [
            {
                name: "NextJs",
                src: "/images/nextjs.png",
            },
            {
                name: "TypeScript",
                src: "/images/typescript.png",
            },
            {
                name: "Tailwind CSS",
                src: "/images/tailwind.png",
            },
            {
                name: "Framer Motion",
                src: "/images/framer.png",
            },
            {
                name: "GSAP",
                src: "/images/gsap.png",
            },
        ]
    },
]


export const AboutData = [
    {
      id: 1,
      startTime: "January 2020",
      endTime: "June 2020",
      title: "Front-End Development",
      content: [
        {
          name: "HTML & CSS",
          logo: "/images/color_react.png",
          description: "Learned the basics of structuring and styling web pages using HTML5 and CSS3."
        },
        {
          name: "JavaScript",
          logo: "/iamges/expo.png",
          description: "Gained a solid understanding of JavaScript fundamentals and DOM manipulation."
        },
        {
          name: "Responsive Design",
          logo: "/images/node_js.png",
          description: "Practiced making web pages responsive for various screen sizes and devices."
        }
      ]
    },
    {
      id: 2,
      startTime: "July 2020",
      endTime: "December 2020",
      title: "JavaScript Frameworks",
      content: [
        {
          name: "React",
          logo: "/images/expo.png",
          description: "Developed interactive UIs using components, hooks, and state management with React."
        },
        {
          name: "Redux",
          logo: "/images/node_js.png",
          description: "Learned to manage application state using Redux for efficient state sharing."
        }
      ]
    },
    {
      id: 3,
      startTime: "January 2021",
      endTime: "June 2021",
      title: "Back-End Development",
      content: [
        {
          name: "Node.js",
          logo: "/images/node_js.png",
          description: "Built server-side applications and REST APIs using Node.js."
        },
        {
          name: "Express",
          logo: "/images/express.png",
          description: "Utilized Express framework to simplify routing and middleware handling in Node.js."
        }
      ]
    },
    {
      id: 4,
      startTime: "July 2021",
      endTime: "December 2021",
      title: "Database Management",
      content: [
        {
          name: "MongoDB",
          logo: "/images/mongodb_logo.png",
          description: "Gained experience with NoSQL databases and implemented data storage using MongoDB."
        },
        {
          name: "SQL",
          logo: "/images/node_js.png",
          description: "Learned the basics of relational databases and SQL for structured data management."
        }
      ]
    },
    {
      id: 5,
      startTime: "January 2022",
      endTime: "Present",
      title: "Advanced Topics",
      content: [
        {
          name: "TypeScript",
          logo: "/images/typescript.png",
          description: "Enhanced JavaScript skills by adding type safety and working with TypeScript."
        },
        {
          name: "GraphQL",
          logo: "/images/node_js.png",
          description: "Explored GraphQL for efficient data querying and worked on server-side integrations."
        },
        {
          name: "Testing",
          logo: "/images/node_js.png",
          description: "Practiced writing unit and integration tests to ensure code reliability."
        },
        {
          name: "TypeScript",
          logo: "/images/typescript.png",
          description: "Enhanced JavaScript skills by adding type safety and working with TypeScript."
        },
        {
          name: "GraphQL",
          logo: "/images/node_js.png",
          description: "Explored GraphQL for efficient data querying and worked on server-side integrations."
        },
        {
          name: "Testing",
          logo: "/images/node_js.png",
          description: "Practiced writing unit and integration tests to ensure code reliability."
        }
      ]
    }
  ];
  
