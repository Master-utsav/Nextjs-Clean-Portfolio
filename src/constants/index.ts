
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





