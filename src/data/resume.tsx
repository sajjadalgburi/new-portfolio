import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Newspaper } from "lucide-react";
import { Airplay, Video } from "lucide-react";

export const DATA = {
  name: "Sajjad Algburi",
  initials: "SA",
  url: "https://sajjadalgburi.dev",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/toronto",
  role: "Full-stack Software Engineer",
  description:
    "Full Stack Engineer passionate about building impactful products and empowering others. Experienced in modern web technologies and AI integration.",
  summary:
    "After enrolling in a coding bootcamp in 2023, I connected with talented peers and built a range of exciting projects. My journey has been driven by curiosity, collaboration, and a desire to solve real-world challenges with technology.",
  avatarUrl: "/me-2.png",
  seo: {
    locale: "en_CA",
    twitterHandle: "@Sajjadalgburi",
    keywords: [
      "Full-stack software engineer",
      "Full-stack developer",
      "Software engineer Toronto",
      "AI engineer",
      "AI application developer",
      "Next.js developer",
      "React developer",
      "TypeScript developer",
      "Python developer",
      "Web developer",
      "Freelance developer",
    ],
    knowsAbout: [
      "Artificial intelligence",
      "Full-stack web development",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Node.js",
      "SQL",
      "Tailwind CSS",
    ],
  },

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sajjadalgburi.dev@gmail.com",
    tel: "+1 (825) 365-6358",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sajjadalgburi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sajjadalgburi/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Newspaper,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sajjadalgburi.dev@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Magic Hour",
      href: "https://www.magichour.ai/",
      badges: [],
      location: "San Francisco Bay Area · Remote",
      title: "Software Engineer",
      logoUrl: "/work/magichour1_logo.jpeg",
      start: "June 2025",
      end: "Present",
      description:
        "Building Magic Hour, an AI video and image platform used by over 5 million users worldwide. Contributing to 100+ tools for creators, including text to video, image to video, face swap, and AI image generation, on a platform backed by Y Combinator and Eight Capital.",
    },
    {
      company: "Codebender AI",
      href: "https://www.codebender.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/work/codebender-ai.jpeg",
      start: "Jan 2025",
      end: "June 2025",
      description:
        "Developed and deployed AI automations using custom code and low-code tools (n8n), streamlining client workflows, reducing manual tasks by 40%, and lowering operational costs.",
    },
    {
      company: "Outreach AI",
      href: "https://www.outreachai.app/",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/work/outreachai_app_logo.jpeg",
      start: "Aug 2024",
      end: "Jan 2025",
      description:
        "Built the frontend + backend and integrated AI models for a platform that generates personalized outreach messages and cover letters, enhancing user engagement and efficiency.",
    },
    {
      company: "Upwork Contractor",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/work/upwork_logo.jpeg",
      start: "Dec 2023",
      end: "Aug 2024",
      description:
        "Collaborated with diverse clients to design and develop high-performance, mobile-responsive web applications using React, Next.js, and TypeScript. Delivered custom backend (nodejs + express) solutions tailored to business needs, ensuring fast load times, seamless user experiences, and scalable architectures.",
    },
  ],
  education: [
    {
      school: "University of Toronto - Bootcamp",
      href: "https://www.utoronto.ca/",
      degree: "Certificate",
      logoUrl: "/education/university_of_toronto_logo.jpeg",
      start: "Nov 2023",
      end: "May 2024",
    },
  ],
  certifications: [
    {
      org: "Frontend Masters",
      credUrl:
        "https://static.frontendmasters.com/ud/c/3c1904eaa5/ZfBjFwyWWj/practical-python.pdf",
      name: "Practical Guide to Python",
      logoUrl: "/certifications/front_end_masters.jpeg",
      issued: "April 2025",
    },
    {
      org: "Frontend Masters",
      credUrl:
        "https://static.frontendmasters.com/ud/c/3c1904eaa5/fpKAkoKlbq/testing.pdf",
      name: "Testing Fundamentals",
      logoUrl: "/certifications/front_end_masters.jpeg",
      issued: "March 2025",
    },
    {
      org: "Apollo GraphQL",
      credUrl:
        "https://www.apollographql.com/tutorials/certifications/39d39aaa-8149-4c1f-9924-0317e7a26698",
      name: "Graph Developer - Associate",
      logoUrl: "/certifications/apollo_graphql_logo.jpeg",
      issued: "Feb 2025",
    },
  ],
  projects: [
    {
      title: "Funnel Automation - Dashboard",
      href: "https://www.loom.com/share/be12ed7b2b6f40d28e81fecbfeea93fa?sid=4fa3168c-4f2f-4a33-8ea4-25fb61985656",
      dates: "June 2025",
      active: true,
      description:
        "An automation built for a client, to visualize business funnel—from views to closed deals. I showcase various analytics, including regional performance, video stats, and AI insights that help identify bottlenecks in the buisness and opportunities for improvement.",
      technologies: [
        "n8n",
        "TypeScript",
        "React",
        "Supabase",
        "Cal.com",
        "Framer Motion",
      ],
      links: [
        {
          type: "Video",
          href: "https://www.loom.com/share/be12ed7b2b6f40d28e81fecbfeea93fa?sid=4fa3168c-4f2f-4a33-8ea4-25fb61985656",
          icon: <Video className="size-3" />,
        },
      ],
      image: "/dashboard.png",
      video: "",
    },
    {
      title: "AI Receptionist",
      href: "https://www.loom.com/share/6e9a3168f21649b6b5bdc368ef5aefea?sid=f0c6a582-ae92-44f1-8bf0-f045ecedf8cf",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "Revolutionizing Dental Appointments with Sarah! An AI agent that simplifies booking dental appointments by understanding user preferences and automating the scheduling process. Also, follows secure HIPAA compliance standards.",
      technologies: ["Retell AI", "TypeScript", "n8n", "Airtable", "Node.js"],
      links: [
        {
          type: "Video",
          href: "https://www.loom.com/share/6e9a3168f21649b6b5bdc368ef5aefea?sid=f0c6a582-ae92-44f1-8bf0-f045ecedf8cf",
          icon: <Video className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sarah.png",
      video: "",
    },
    {
      title: "Interview Pal",
      href: "https://drive.google.com/file/d/1szn73VL_cuMHY3MirBCbhMf3JufhJhfg/view",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "A platform for practicing coding interviews with AI-generated questions and instant feedback. Users select topics and receive tailored interview experiences.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "Gemini",
        "Vapi",
      ],
      links: [
        {
          type: "Video",
          href: "https://drive.google.com/file/d/1szn73VL_cuMHY3MirBCbhMf3JufhJhfg/view",
          icon: <Video className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/interview_pal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/inter.png",
      video: "",
    },
    {
      title: "News Network",
      href: "https://drive.google.com/file/d/1WX62CmU2zTO7L5pFUM452zN7G2CRMkPe/view",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "Full-stack news app displaying global trending news, with AI-powered article bias analysis and summary generation.",
      technologies: [
        "React",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "GraphQL",
        "Node.js",
        "Jest",
        "Express.js",
      ],
      links: [
        {
          type: "Video",
          href: "https://drive.google.com/file/d/1WX62CmU2zTO7L5pFUM452zN7G2CRMkPe/view",
          icon: <Video className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/news-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/news.png",
      video: "",
    },
    {
      title: "Cheff Mind AI",
      href: "https://www.chefmind.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Upload a photo of your ingredients and let AI craft personalized recipes. Transform everyday ingredients into extraordinary dishes.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI LLM",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.chefmind.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/Chef_Mind_AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cheff-2.png",
      video: "",
    },
    {
      title: "Fitness AI",
      href: "https://fitness-ai-amber.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Personalized workout plans tailored to your fitness goals and preferences. My first AI project, providing a valuable learning experience.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI LLM",
      ],
      links: [
        {
          type: "Website",
          href: "https://fitness-ai-amber.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/Fitness-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yoga.jpg",
      video: "",
    },
  ],
  more_projects: [
    {
      title: "Scale Surge",
      dates: "June 1st - 7th, 2025",
      location: "United States, Illinois",
      description:
        "Developed an SEO friendly website for an LLC company using Next.js, TypeScript, and TailwindCSS. The project focused on enhancing the company's online presence and improving search engine visibility.",
      image: "scale_surge_logo.jpeg",
      links: [
        {
          title: "Website",
          icon: <Airplay className="h-4 w-4" />,
          href: "https://www.scalesurge.tech/",
        },
      ],
    },
    {
      title: "Job Shot",
      dates: "May 7th - 28th, 2025",
      location: "Calgary, Alberta",
      description:
        "Fullstack application for contractors to find jobs and manage their profiles. Built with Next.js, TypeScript, and Supabase. Unfortunately, the project was not completed due clinet not paying for the project.",
      image:
        "https://storage.googleapis.com/msgsndr/a2QybhLDs1T9v5eC0Z0z/media/668310d6811a7e3b961e73e3.png",
      links: [],
    },

    {
      title: "Career Boost",
      dates: "January 18th - 25th, 2025",
      location: "Remote",
      description:
        "lead a team of developers to create a platform providing personalized career advice and job recommendations using AI. The platform analyzes user profiles and preferences to suggest tailored career paths and opportunities. Unfortunately, the project was not completed due to team members not being able to complete their tasks.",
      image: "/boost.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/career-boost-ai",
        },
      ],
    },
    {
      title: "Promptopia",
      dates: "July 25th - August 12th, 2024",
      location: "Toronto, Ontario",
      description:
        "A platform for discovering and sharing AI prompts, enabling users to enhance their AI interactions. Built with Next.js, TypeScript, MongoDB, and serverless functions.",
      image: "/promptopia.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/promptopia",
        },
      ],
    },
    {
      title: "Code Threads",
      dates: "September 10th - 25th, 2024",
      location: "Remote",
      description:
        "Took insporation from instagram's newly released Threads app, and created a similar platform for sharing code snippets. Users can post code snippets, comment, and like posts.",
      image: "/code-threads.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/code_threads",
        },
      ],
    },
    {
      title: "Cool Games",
      dates: "May 8th - June 25th, 2024",
      location: "Toronto, Ontario",
      description:
        "First fullstack project i built. It's a platform for discovering and sharing games. Users can post games, comment, and like posts. Built with Vite, React, Javascript, and MongoDB, Express.",
      image: "/cool-games.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/Cool-Games",
        },
      ],
    },
    {
      title: "Social Network (Backend)",
      dates: "November 23rd - 25th, 2018",
      location: "Toronto, Ontario",
      description:
        "Developed a backend for a social network platform using Node.js and Express. The backend supports user authentication, post creation, and comment functionality.",
      image: "/network.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/Social-Network-API",
        },
      ],
    },
    {
      title: "Book Search Engine",
      dates: "April 20th - 28th, 2024",
      location: "Toronto, Ontario",
      description:
        "Built a book search engine for my bootcamp project. The engine allows users to search for books by title, author, or ISBN, and provides detailed information about each book.",
      image: "/book.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/Book-Search-Engine",
        },
      ],
    },
    {
      title: "E-Commerce Platform (Backend)",
      dates: "Feb 21st - 27th, 2024",
      location: "Toronto, Ontario",
      description:
        "Developed a backend for an e-commerce platform using Node.js and Express. The backend supports product management, user authentication, and order processing.",
      image: "/e-commerce.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/E-commerce-Back-End",
        },
      ],
    },
  ],
} as const;
