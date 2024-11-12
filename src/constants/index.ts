
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
      startTime: "Year 2014",
      endTime: "Year 2019",
      title: "Origin of Master",
      content: [
        {
          name: "My Game Zone",
          logo: "/images/xbox.jpg",
          description: "When, I was in 6th std. I was obsessed with video games, bcoz my father has a video game parlour, in that there was a game named URBAN in play-station, only a single fighter has a tag of MASTER among all other fighter. So, here's how MASTER become my profile since 2012. In Call of Duty (x-box 360), clash of clans, call of duty mobile, my all social handles and now My Portfolio is master utsav. Isn't it cool!!! "
        },
      ]
    },
    {
      id: 2,
      startTime: "Year 2019",
      endTime: "Year 2022",
      title: "Why IIT-JEE? Why Maths?",
      content: [
        {
          name: "JEE Aspirant",
          logo: "/images/nta.jpeg",
          description: "Already choosed PCM, then I think if I had to study for boards then, why not go for little advance. After two years I realised it not little to too much advance, well I become a dropper and in that year I explore more about programming and many more."
        },
        {
          name: "Editing",
          logo: "/images/adobe.png",
          description: "In that drop year, I started my youtube channel @muj_music, learned premiere pro, after effects, photoshop and just exploring the designs and try to recreate and re-imagined some videos and all."
        },
        { 
          name: "Programming",
          logo: "/images/programming.jpg",
          description: "In while, I explore about programming, first langauage i learn is C by making notes and code in mobile phone. And after that i got my first laptop and i learned Python Old days."
        },
      ]
    },
    {
      id: 3,
      startTime: "November 2022",
      endTime: "August 2023",
      title: "What is Programming?",
      content: [
        {
          name: "Start over from C",
          logo: "/images/c.png",
          description: "I learned basics of C, I remember that feeling when i made my first simple calulator. That was awesome, then i learn more about C until i learned about malloc and calloc - 'bullet hits my brain', just kidding then i switch to C++."
        },
        {
          name: "Choosing C++ over JAVA",
          logo: "/images/cpp.png",
          description: "Only reason of learning C++ is of my backgound C. And the hype that you have to learn DSA in C++ and JAVA. I learned C++ all the way to OOPS and then STL. I didn't learned DSA yet."
        },
        {
          name: "Skeleton of Web Page",
          logo: "/images/html.png",
          description: "I want to create something which others can see and use that, which have some interactions, so i choose web development, beacuse youtube have so many thing related to web dev. I learned HTML."
        },
        {
          name: "Man without muscles ~ utsav",
          logo: "/images/css.png",
          description: "As i already have a knowledge about many properties of CSS, because i learned Editing. So it's too smooth learning curve for me to understand CSS."
        },
        {
          name: "is CSS easy to write?",
          logo: "/images/tailwind.png",
          description: "Writing css is too time taking and lengthy, so i explore the most handy way to write the css, i found tailwindCSS and now in every tsx component i write tailwind classes. And it support so my libraries for components."
        },
      ]
    },
    {
      id: 4,
      startTime: "August 2023",
      endTime: "December 2024",
      title: "DSA or Web Development",
      content: [
        {
          name: "DSA with C++",
          logo: "/images/cpp.png",
          description: "Since, i already know C++, i continued my journey with learning data structures and algorithms, until the 2D dynamic programming and graph comes, after that i was like '***cho ab nahi karna, ho gaya mera'"
        },
        {
          name: "Ufff JavaScript",
          logo: "/images/javascript.png",
          description: "I continued my web dev journey along with the DSA. I learned JavaScript, i don't want to talk about this langauge. Be quite TypeScript is listening."
        },
        {
          name: "Flying kick to Node JS",
          logo: "/images/node_js.png",
          description: "I learned about NPM, i create my own npm package, creating server from nodejs directly, learned about http/https."
        },
        {
          name: "Flying kiss to Express",
          logo: "/images/express.png",
          description: "I love the modular structure of express and ease they provide to maintain the whole backend is awesome. I learned local authentication, google | github authentication without using any third party, authorization, headers, tokens, cookie, session, and many more..."
        },
        {
          name: "i never used MySql in porjects",
          logo: "/images/mysql.png",
          description: "I dont know why, but I think before NO-SQL first I should have to learn SQL, so I makes notes which have now, so much dust on it..."
        },
        {
          name: "GOAT no-sql MONGO DB",
          logo: "/images/mongo_db.png",
          description: "First I learned MongoDB on shell ~mongosh and then I learn mongoose to connect it from my express server."
        },
      ]
    },
    {
      id: 5,
      startTime: "January 2024",
      endTime: "June 2024",
      title: "Obsessed with Frontend",
      content: [
        {
          name: "TypeScript: any (lol...)",
          logo: "/images/typescript.png",
          description: "Enhanced JavaScript skills by adding type safety and working with TypeScript. The only reason, why i told you to be quite for appreciating javaScript. After learning typescript i rarely used javaScript, all my latest projects are in TypeScript"
        },
        {
          name: "Backend + Frontend ~ NextJs",
          logo: "/images/nextjs.png",
          description: "I learned the nextjs routing system, SEO, client side and server side rendering and many more. I build my first NextJs project named as Kronoskill."
        },
        {
          name: "<motion.p> Framer Motion </motion.p>",
          logo: "/images/framer.png",
          description: "Obsessed from smooth animations from the time of video editing, I learned framer motion for animating that cool texts and elements, as you see here in this portfolio of mine."
        },
        {
          name: "Animate anything ~ GSAP",
          logo: "/images/gsap.png",
          description: "JavaScript ok no js only TypeScript, library that lets you do whatever you want to do with the elements, you can select element via ids or in react via ref. Animate that by creating gsap.timeline()"
        },
        {
          name: "Only for Professionals ~ ThreeJS",
          logo: "/images/three_js.png",
          description: "I re-create a ThreeJs portfolio inspired from JsMastery and along with that I learned all about threeJs, i can say alot about threeJs but i recommend you to learn that ThreeJs from JsMastery ThreeJs portfolio"
        },
      ]
    },
    {
        id: 6,
        startTime: "July 2024",
        endTime: "Present",
        title: "Mobile App & Blockchain & Advance Backend",
        content: [
          {
            name: "React Native framework EXPO",
            logo: "/images/expo.png",
            description: "After getting so much knowledge about web devlopment and beacuse expo is routing framework built on top of react-native, its really easy for me to build an app, so i designed and then i build Reciepe App from strach no-tutorials just reading docs and using AI to understand the react-native components."
          },
          {
            name: "Blockchain + Decentralized app",
            logo: "/images/dapp.png",
            description: "Learned about finance, blockchains, cryptography, keys, solana, wallets, tokens and many more. Currently, I am learning Eth."
          },
          {
            name: "All in one place ~ Firebase",
            logo: "/images/firebase.png",
            description: "Still remain to learn completely and implementing the auth, storage."
          },
          {
            name: "Redis",
            logo: "/images/redis.png",
            description: "An in-memory data structure store, ideal for caching, real-time data, and task queuing needs."
          }
        ]
    }
  ];
  
