export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Blog',
    href: 'https://devlogs-by-azizkhuja.vercel.app/',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'DevLogs',
    desc: 'Explore insightful blog posts on software engineering, tech tips, and personal growth. Written by a passionate software engineer, this website shares experiences, best practices, and industry trends to inspire and empower developers',
    subdesc: 'Tech stack: TypeScript, Next, Tailwind Sanity',
    href: 'https://devlogs-by-azizkhuja.vercel.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/screen.jpeg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: 'assets/typescript.png',
      },
      {
        id: 3,
        name: 'Next.js',
        path: '/assets/nextjs.svg',
      },
      {
        id: 4,
        name: 'Sanity',
        path: '/assets/sanity.svg',
      },
    ],
  },
  {
    title: 'Gamefy',
    desc: "In this application you can get information about last game and Minimum System Requirements information. Find & track the best free-to-play games! Track what you've played and search for what to play next!",
    subdesc: 'Tech stack: React, React-Router, Axios, Material-UI',
    href: 'https://gamefy.netlify.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'React Router',
        path: 'assets/react-router.svg',
      },
      {
        id: 3,
        name: 'Axios',
        path: '/assets/axios.svg',
      },
      {
        id: 4,
        name: 'Material UI',
        path: '/assets/material-ui.svg',
      },
    ],
  },
  {
    title: 'Footbally',
    desc: 'Up-to-date football results website offers premier stats and data for 1000+ leagues worldwide. Detailed coverage includes team, league, and player stats with goals scored, ensuring comprehensive football results and statistics',
    subdesc: 'Tech stack: React, Axios, ContextAPI,  Moment, Swiper',
    href: 'https://statistics-football.netlify.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Swiper.js',
        path: 'assets/swiper.svg',
      },
      {
        id: 3,
        name: 'Axios',
        path: '/assets/axios.svg',
      },
      {
        id: 4,
        name: 'Material UI',
        path: '/assets/material-ui.svg',
      },
    ],
  },
  {
    title: 'Mango Travel',
    desc: 'Discover vibrant journeys with Mango Travel, your gateway to unforgettable adventures. From serene escapes to thrilling explorations, we craft personalized travel experiences that inspire, connect, and leave lasting memories. Begin your journey today!',
    subdesc: 'Tech stack: Tailwind, Email Service, Material UI',
    href: 'https://mango-travel.netlify.app/index-english.html',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.jpg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Formspree',
        path: '/assets/formspree.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    androidLogoPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Amway',
    pos: 'Middle Software Engineer',
    duration: '2022 Nov - Present',
    title:
      'Develop native mobile app with Kotlin and Jetpack Compose, manage app releases, execute the software lifecycle, develop features, review/test code, and work in an agile SCRUM-based environment in a large setup',
    icon: '/assets/amway-logo.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Bidroom',
    pos: 'Junior Software Engineer',
    duration: '2022 May - 2022 Oct',
    title:
      'Develop and maintain React Native (iOS/Android) and web apps for tourism/hospitality, collaborate in teams, participate in project cycles, create documentation, review code, work with UX, and manage tasks using Git & Jira',
    icon: '/assets/bidroom-logo.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Cognizant',
    pos: 'Senior Process Executive',
    duration: '2019 Mar - 2022 Apr',
    title:
      'Review user reports on website content, analyze sensitive policy violations, adopt strategic thinking, make balanced decisions, assist team members, guide new joiners, and build internal web projects using HTML, CSS, and Google Apps Script',
    icon: '/assets/cognizant-logo.svg',
    animation: 'salute',
  },
];
