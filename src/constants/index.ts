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
  },
];

export const Frameworks = [
  {
    name: "Next.js",
    src: "/images/nextjs.png",
    description:
      "Powerful React framework with server-side rendering and static site generation.",
  },
  {
    name: "Express.js",
    src: "/images/express.png",
    description:
      "Fast, minimalist backend framework for building robust server-side applications.",
  },
  {
    name: "React Native + Expo",
    src: "/images/expo.png",
    description:
      "Cross-platform mobile framework with fast development and rich UI tools.",
  },
];

export const Frontend = [
  {
    name: "React",
    src: "/images/color_react.png",
    description:
      "A JavaScript library for building user interfaces with a focus on interactive web apps.",
  },
  {
    name: "TypeScript",
    src: "/images/typescript.png",
    description:
      "A typed superset of JavaScript that enhances code reliability and development efficiency.",
  },
  {
    name: "Tailwind CSS",
    src: "/images/tailwind.png",
    description:
      "A utility-first CSS framework that streamlines the creation of modern, responsive web UIs.",
  },
  {
    name: "Framer Motion",
    src: "/images/framer.png",
    description:
      "An animation library for React that creates smooth, declarative animations and interactions.",
  },
  {
    name: "GSAP",
    src: "/images/gsap.png",
    description:
      "A powerful JavaScript library for complex animations and rich visual effects with timelines.",
  },
  {
    name: "Three.js",
    src: "/images/three_js.png",
    description:
      "A JavaScript library for creating 3D graphics and immersive visual experiences in the browser.",
  },
];

export const Backend = [
  {
    name: "Node.js",
    src: "/images/node_js.png",
    description:
      "A runtime allowing JavaScript to build fast, scalable server-side applications efficiently.",
  },
  {
    name: "MongoDB",
    src: "/images/mongo_db.png",
    description:
      "A NoSQL database that stores data in a flexible, JSON-like structure ideal for modern applications.",
  },
  {
    name: "Redis",
    src: "/images/redis.png",
    description:
      "An in-memory data structure store, ideal for caching, real-time data, and task queuing needs.",
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
    description:
      "A versatile Google-backed platform with real-time databases, authentication, and cloud services.",
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
  {
    id: 1,
    title: "Course Yuga",
    description:
      "Courses are Required to master any skill in this yuga, we offer you all the most advance and cost effective courses.",
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
    ],
  },
  {
    id: 2,
    title: "ThreeJs Portfolio",
    description:
      "Explore my portfolio and reach out for remote collaborations to build websites and apps tailored to your needs.",
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
    ],
  },
  {
    id: 3,
    title: "Master's Reciepe an Expo App",
    description:
      "Basic Mobile App where you find the recipe, of your favourite dishes.",
    imageSrc: "/video/video-reciepe-app.mp4",
    gitLink: "https://github.com/Master-utsav/Master-Recipe-Expo-React-Native",
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
        name: "Expo",
        src: "/images/expo.png",
      },
    ],
  },
  {
    id: 4,
    title: "Kronoskill ~ Skill learning platform",
    description:
      "A platform where you search or select any any skill and learn that from the best youtube playlist available. Site is not complete as of production level",
    imageSrc: "/images/kronoskill_banner.png",
    gitLink: "https://github.com/Master-utsav/KronoSkill",
    liveLink: "https://kronoskill.vercel.app",
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
        name: "NextJS",
        src: "/images/nextjs.png",
      },
    ],
  },
  {
    id: 5,
    title: "KM Solar Energy",
    description:
      "This was just a frontend project, using nextjs just for SEO and there are some framer and gsap usages.",
    imageSrc: "/video/video-km-solar-energy.mp4",
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
    ],
  },

  // {
  //     id: 6,
  //     title: "KM Solar Energy",
  //     description: "This was just a frontend project, using nextjs just for SEO and there are some framer and gsap usages.",
  //     imageSrc: "/images/km_solar_energy.png",
  //     gitLink: "https://github.com/Master-utsav/KM-Solar-Energy",
  //     liveLink: "https://km-solar-pannel.vercel.app",
  //     techStack: [
  //         {
  //             name: "NextJs",
  //             src: "/images/nextjs.png",
  //         },
  //         {
  //             name: "TypeScript",
  //             src: "/images/typescript.png",
  //         },
  //         {
  //             name: "Tailwind CSS",
  //             src: "/images/tailwind.png",
  //         },
  //         {
  //             name: "Framer Motion",
  //             src: "/images/framer.png",
  //         },
  //         {
  //             name: "GSAP",
  //             src: "/images/gsap.png",
  //         },
  //     ]
  // },
];

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
        description:
          "When I was in 6th std, I was obsessed with video games because my father had a video game parlour. In it, there was a game named URBAN on PlayStation, where only a single fighter had the tag of MASTER among all other fighters.",
      },
      {
        name: "Master Utsav",
        logo: "/images/my_picture_logo.jpg",
        description:
          "So, here's how MASTER became my profile since 2014. In Call of Duty (Xbox 360), Clash of Clans, Call of Duty Mobile, all my social handles, and now my portfolio, I am known as Master Utsav. Isn't it cool!",
      },
    ],
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
        description:
          "Already chose PCM, then I thought if I had to study for boards, why not go for a little advance? After two years, I realized it was not a little but too much advance. Well, I became a dropper, and in that year, I explored more about programming and many more things.",
      },
      {
        name: "Editing",
        logo: "/images/adobe.png",
        description:
          "In that drop year, I started my YouTube channel @muj_music, learned Premiere Pro, After Effects, Photoshop, and just explored designs, trying to recreate and re-imagine some videos and all.",
      },
      {
        name: "Programming",
        logo: "/images/programming.jpg",
        description:
          "Meanwhile, I explored programming. The first language I learned was C by making notes and coding on a mobile phone. After that, I got my first laptop and learned Python in the old days.",
      },
    ],
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
        description:
          "I learned the basics of C. I remember the feeling when I made my first simple calculator. That was awesome! Then I learned more about C until I encountered malloc and calloc — 'bullet hits my brain,' just kidding. Then I switched to C++.",
      },
      {
        name: "Choosing C++ over JAVA",
        logo: "/images/cpp.png",
        description:
          "The only reason for learning C++ was my background in C and the hype around learning DSA in C++ and JAVA. I learned C++ all the way to OOP and then STL. I haven't learned DSA yet.",
      },
      {
        name: "Skeleton of Web Page",
        logo: "/images/html.png",
        description:
          "I wanted to create something that others can see and use, with some interactions, so I chose web development. YouTube has so many resources related to web dev. I learned HTML.",
      },
      {
        name: "Man without muscles ~ utsav",
        logo: "/images/css.png",
        description:
          "I already had knowledge of many properties of CSS because I learned editing, so it was a smooth learning curve for me to understand CSS.",
      },
      {
        name: "Is CSS easy to write?",
        logo: "/images/tailwind.png",
        description:
          "Writing CSS is very time-consuming and lengthy, so I explored a more convenient way to write CSS. I found TailwindCSS, and now in every TSX component, I write Tailwind classes. It supports many libraries for components.",
      },
    ],
  },
  {
    id: 4,
    startTime: "August 2023",
    endTime: "December 2023",
    title: "DSA or Web Development",
    content: [
      {
        name: "DSA with C++",
        logo: "/images/cpp.png",
        description:
          "Since I already knew C++, I continued my journey with learning data structures and algorithms, until 2D dynamic programming and graphs came. After that, I was like '***cho ab nahi karna, ho gaya mera.'",
      },
      {
        name: "Ufff JavaScript",
        logo: "/images/javascript.png",
        description:
          "I continued my web dev journey along with DSA. I learned JavaScript, but I don't want to talk about this language. Be quiet, TypeScript is listening.",
      },
      {
        name: "Flying kick to Node JS",
        logo: "/images/node_js.png",
        description:
          "I learned about NPM, created my own npm package, created a server directly from Node.js, and learned about HTTP/HTTPS.",
      },
      {
        name: "Flying kiss to Express",
        logo: "/images/express.png",
        description:
          "I love the modular structure of Express and the ease it provides in maintaining the whole backend. It’s awesome. I learned local authentication, Google | GitHub authentication without using any third-party tools, authorization, headers, tokens, cookies, sessions, and many more...",
      },
      {
        name: "I never used MySQL in projects",
        logo: "/images/mysql.png",
        description:
          "I don’t know why, but I think I should learn SQL before NO-SQL. So I made notes, which now have so much dust on them...",
      },
      {
        name: "GOAT NoSQL MongoDB",
        logo: "/images/mongo_db.png",
        description:
          "First, I learned MongoDB in the shell ~mongosh, and then I learned Mongoose to connect it to my Express server.",
      },
    ],
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
        description:
          "I enhanced my JavaScript skills by adding type safety and working with TypeScript. The only reason I told you to be quiet about appreciating JavaScript. After learning TypeScript, I rarely used JavaScript; all my latest projects are in TypeScript.",
      },
      {
        name: "Backend + Frontend ~ NextJs",
        logo: "/images/nextjs.png",
        description:
          "I learned the Next.js routing system, SEO, client-side and server-side rendering, and much more. I built my first Next.js project called Kronoskill.",
      },
      {
        name: "<motion.p> Framer Motion </motion.p>",
        logo: "/images/framer.png",
        description:
          "Obsessed with smooth animations from the time of video editing, I learned Framer Motion to animate cool texts and elements, as you see here in this portfolio of mine.",
      },
      {
        name: "Animate anything ~ GSAP",
        logo: "/images/gsap.png",
        description:
          "JavaScript? No, js only TypeScript. GSAP is a library that lets you do whatever you want with elements. You can select elements via IDs or in React via refs. Animate them by creating gsap.timeline().",
      },
      {
        name: "Only for Professionals ~ ThreeJS",
        logo: "/images/three_js.png",
        description:
          "I recreated a Three.js portfolio inspired by JsMastery, and along with that, I learned all about Three.js. I can say a lot about Three.js, but my recommendation for you is to learn Three.js from the JsMastery Three.js portfolio.",
      },
    ],
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
        description:
          "After gaining so much knowledge about web development and because Expo is a routing framework built on top of React Native, it was really easy for me to build an app. I designed and built a Recipe App from scratch with no tutorials—just reading the docs and using AI to understand the React Native components.",
      },
      {
        name: "Blockchain + Decentralized app",
        logo: "/images/dapp.png",
        description:
          "I learned about finance, blockchains, cryptography, keys, Solana, wallets, tokens, and many more. Currently, I am learning Ethereum.",
      },
      {
        name: "All in one place ~ Firebase",
        logo: "/images/firebase.png",
        description:
          "Still need to learn completely and implement auth and storage.",
      },
      {
        name: "Redis",
        logo: "/images/redis.png",
        description:
          "An in-memory data structure store, ideal for caching, real-time data, and task queuing needs. Still need to implement.",
      },
    ],
  },
];

export const TechLinks = {
  reactjs: "https://legacy.reactjs.org/docs/getting-started.html",
  typescript: "https://www.typescriptlang.org/docs",
  expo: "https://docs.expo.dev",
  nodejs:
    "https://nodejs.org/docs/latest/api/documentation.html#about-this-documentation",
  nextjs: "https://nextjs.org/docs",
  express: "https://expressjs.com/en/starter/installing.html",
  threejs: "https://threejs.org/docs/#manual/en/introduction/Installation",
  framer: "https://motion.dev/docs/react-quick-start",
  mongodb: "https://www.mongodb.com/docs",
  redis: "https://redis.io/docs/latest",
  firebase: "https://firebase.google.com/docs/guides",
};
