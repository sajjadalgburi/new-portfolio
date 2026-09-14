import { Icons } from "@/components/icons";
import { HomeIcon, Newspaper } from "lucide-react";

export const DATA = {
  name: "Sajjad Algburi",
  initials: "SA",
  url: "https://sajjadalgburi.dev",
  location: "Toronto, Ontario",
  locationLink: "https://www.google.com/maps/place/toronto",
  role: "Full-stack Software Engineer",
  description:
    "Product-focused full-stack software engineer building fast, reliable AI web applications with Next.js, React, TypeScript, and Python/FastAPI.",
  summary:
    "Software Engineer experienced in building AI-powered products and full-stack web applications. At Magic Hour AI, I build production features for creator tools used by more than 5 million people worldwide. Previously, I shipped client websites and internal tools as a freelance developer. I enjoy turning ambitious product ideas into reliable, thoughtful experiences.",
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

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
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
      start: "Nov 2025",
      end: "Present",
      description:
        "Building and scaling production features for Magic Hour, an AI video and image platform used by more than 5 million people worldwide. I contribute to creator workflows across text-to-video, image-to-video, face swap, AI image generation, and video editing using Next.js, React, TypeScript, Prisma, SQL, and Tailwind CSS.",
    },
    {
      company: "Magic Hour",
      href: "https://www.magichour.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/work/magichour1_logo.jpeg",
      start: "Jun 2025",
      end: "Nov 2025",
      description: "Intern @ Magic Hour.",
    },
    {
      company: "Upwork Freelancer",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/work/upwork_logo.jpeg",
      start: "Dec 2023",
      end: "Aug 2024",
      description:
        "Built and deployed responsive client websites and internal tools using React, Next.js, TypeScript, and Tailwind CSS. As part of my Upwork work, I built the Juice.gg Admin Case Builder: an internal AI-powered case-generation platform with admin workflows, CRUD functionality, generation history, SEO improvements, analytics, and business-focused integrations.",
    },
  ],
  education: [
    {
      school: "University of Toronto",
      href: "https://www.utoronto.ca/",
      degree: "Certificate, Full Stack Engineer",
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
      title: "Juice.gg Admin Case Builder",
      href: undefined,
      dates: "2026",
      active: true,
      description:
        "A featured Upwork client project: an internal AI-powered case-generation platform that dynamically creates website cases through prompt-based generation. I implemented role-based admin access, full CRUD operations, and versioned image editing to preserve earlier generations. The product delivered more than 10x ROI by reducing design dependency and operational costs.",
      technologies: ["MongoDB", "TypeScript", "Next.js", "Google Cloud"],
      links: [],
      image: "/crown_jewel.png",
      video: "",
    },
    {
      title: "Outreach AI",
      href: undefined,
      dates: "2025",
      active: true,
      description:
        "An AI-powered SaaS product that generates personalized outreach messages from job descriptions and résumé context. I implemented authentication, credit-based usage, and server-side validation, then improved output quality through prompt engineering, résumé analysis, and structured job-description parsing.",
      technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Stripe"],
      links: [],
      image: "/outreach-ai.png",
      video: "",
    },
    {
      title: "Interview Pal",
      href: "https://interview-pal-flame.vercel.app",
      dates: "2025",
      active: true,
      description:
        "An AI-powered mock-interview platform with real-time voice. I built the full user flow for dynamic interview questions and automated feedback, including authentication and session storage.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Gemini", "Vapi"],
      links: [
        {
          type: "Website",
          href: "https://interview-pal-flame.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sajjadalgburi/interview_pal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/interview-pal.png",
      video: "",
    },
    {
      title: "Jobshot Manager",
      href: undefined,
      dates: "2025",
      active: true,
      description:
        "A contractor job-tracking application with secure image uploads, draft workflows, and project categorization. I implemented Supabase Row Level Security policies and storage structure for per-user data isolation and performance, and collaborated on monetization strategy and product scope.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      links: [],
      image: "/boost.jpg",
      video: "",
    },
  ],
  more_projects: [
    {
      title: "Job Shot",
      dates: "May 2025",
      location: "Calgary, Alberta",
      description:
        "A full-stack application for contractors to find jobs and manage their profiles, built with Next.js, TypeScript, and Supabase.",
      image: "/job-shot.png",
      links: [],
    },
    {
      title: "Career Boost",
      dates: "January 2025",
      location: "Remote",
      description:
        "A team project that provided personalized career advice and job recommendations using AI and user-profile analysis.",
      image: "/boost.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/career-boost-ai",
        },
      ],
    },
    {
      title: "Promptopia",
      dates: "July - August 2024",
      location: "Toronto, Ontario",
      description:
        "A platform for discovering and sharing AI prompts, built with Next.js, TypeScript, MongoDB, and serverless functions.",
      image: "/promptopia.svg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/promptopia",
        },
      ],
    },
    {
      title: "Code Threads",
      dates: "September 2024",
      location: "Remote",
      description:
        "A social platform for sharing code snippets, with posts, comments, and likes.",
      image: "/code-threads.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/code_threads",
        },
      ],
    },
    {
      title: "Cool Games",
      dates: "May - June 2024",
      location: "Toronto, Ontario",
      description:
        "A full-stack platform for discovering and sharing games, built with Vite, React, JavaScript, MongoDB, and Express.",
      image: "/cool-games.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/Cool-Games",
        },
      ],
    },
    {
      title: "Social Network API",
      dates: "November 2018",
      location: "Toronto, Ontario",
      description:
        "A Node.js and Express backend for a social network, supporting authentication, posts, and comments.",
      image: "/network.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/Social-Network-API",
        },
      ],
    },
    {
      title: "Book Search Engine",
      dates: "April 2024",
      location: "Toronto, Ontario",
      description:
        "A bootcamp project for searching books by title, author, or ISBN.",
      image: "/book.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/Book-Search-Engine",
        },
      ],
    },
    {
      title: "E-Commerce Platform API",
      dates: "February 2024",
      location: "Toronto, Ontario",
      description:
        "A Node.js and Express backend for product management, user authentication, and order processing.",
      image: "/e-commerce.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Sajjadalgburi/E-commerce-Back-End",
        },
      ],
    },
  ],
} as const;
