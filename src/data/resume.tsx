import { Icons } from "@/components/icons";
import { HomeIcon, Newspaper } from "lucide-react";

export const DATA = {
  name: "Sajjad Algburi",
  initials: "SA",
  url: "https://sajjadalgburi.dev",
  location: "Toronto, Ontario",
  locationLink: "https://www.google.com/maps/place/toronto",
  role: "Full-Stack Engineer",
  description:
    "Full-stack engineer building AI-powered web products with TypeScript, React, and Next.js, spanning user interfaces, backend APIs, model integrations, and billing.",
  summary:
    "Full-stack engineer building AI-powered web products with TypeScript, React, and Next.js, spanning user interfaces, backend APIs, model integrations, and billing.",
  avatarUrl: "/me-2.png",
  seo: {
    locale: "en_CA",
    twitterHandle: "@Sajjadalgburi",
    keywords: [
      "Full-Stack Engineer",
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

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TailwindCSS"],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "FastAPI",
        "Express",
        "Prisma",
        "SQL",
        "MongoDB",
        "Supabase",
        "Firebase",
      ],
    },
    {
      category: "APIs & AI",
      items: [
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "oRPC",
        "AI/LLM Integrations",
      ],
    },
    {
      category: "Testing, Cloud & Tools",
      items: ["Vitest", "Jest", "Docker", "GCP", "Git"],
    },
  ],
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
      company: "Magic Hour AI",
      href: "https://www.magichour.ai/",
      badges: [],
      location: "San Francisco Bay Area · Remote",
      title: "Full-Stack Engineer",
      logoUrl: "/work/magichour1_logo.jpeg",
      start: "Nov 2025",
      end: "Present",
      description: [
        "Built React and Next.js creation workflows, including a v2 redesign; video-attempt rates among tracked accounts were 27.9% higher in the third month after launch than at baseline.",
        "Developed TypeScript APIs and authenticated server actions for media workflows and billing, connecting API cost estimates to signup, Stripe checkout, and subscription management.",
        "Integrated generative image and video models into web and public API workflows, enabling multi-image creation and carrying selected outputs and prompts into video generation.",
        "Restored saved inputs and settings across failed or canceled image, video, and audio projects, enabling retries and eligible older-project reuse while preserving expired-media safeguards.",
      ],
    },
    {
      company: "Magic Hour AI",
      href: "https://www.magichour.ai/",
      badges: [],
      location: "Remote",
      title: "Prototyping Intern",
      logoUrl: "/work/magichour1_logo.jpeg",
      start: "Jun 2025",
      end: "Nov 2025",
      description: [
        "Prototyped AI image/video workflows with Python, ComfyUI, and GPU-backed Jupyter/Colab; partnered with the CEO to compare Wan 2.2, Qwen Image Edit, and InfiniteTalk for speed, quality, and product fit.",
        "Built a stock-footage and text-to-speech video-generator prototype, refining clip-selection prompts, provider fallbacks, and video post-processing.",
        "Packaged AI experiments as runnable Colab notebooks and Python CLI tools; automated Python and n8n workflows and exported ComfyUI generations to Google Sheets for review.",
      ],
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Frontend / Full-Stack Developer",
      logoUrl: "/work/upwork_logo.jpeg",
      start: "Dec 2023",
      end: "Aug 2024",
      description: [
        "Delivered 4 client web projects with responsive React, Next.js, TypeScript, and TailwindCSS interfaces and backend integrations, completing accepted paid milestones.",
        "Saved $15K+ in design and operations costs for Juice.gg by building an internal AI platform for prompt-based website case creation.",
        "Reduced admin content update time by 70% with role-based access, CRUD workflows, and structured generation history.",
      ],
    },
  ],
  education: [
    {
      school: "University of Toronto",
      href: "https://www.utoronto.ca/",
      degree: "Full Stack Engineer Certificate — UofT SCS Coding Boot Camp",
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
      title: "Webgen",
      href: undefined,
      dates: "2026",
      active: true,
      description:
        "A collaborative AI website builder for small businesses. It turns public business details or manual input into editable static websites, with a visual editor and Cloudflare Pages deployment.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Convex",
        "Tailwind CSS",
        "Cloudflare Pages",
      ],
      links: [],
      image: "/webgen-ai-builder.png",
      video: "",
    },
    {
      title: "Outreach AI",
      href: undefined,
      dates: "2025",
      active: true,
      description:
        "Built an AI outreach SaaS that turns resume and job-description context into personalized messages, with Supabase authentication, Stripe credits, and server-side validation.",
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
        "Built a real-time AI mock interview app that pairs Vapi voice practice with Gemini feedback and saves interview sessions using Firebase authentication and storage.",
      technologies: ["Next.js", "TypeScript", "Firebase", "Vapi", "Gemini"],
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
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/1szn73VL_cuMHY3MirBCbhMf3JufhJhfg/view?usp=sharing",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/interview-pal.png",
      video: "",
    },
    {
      title: "Recall Sprint",
      href: undefined,
      dates: "2026",
      active: false,
      description:
        "A focused learning app for developers that turns software topics and notes into short AI-generated quizzes. Review saved scores and explanations, then retry only the questions you missed.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase Auth / RLS",
        "OpenRouter",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      links: [],
      image: "/recall-sprint.png",
      video: "",
    },
  ],
  more_projects: [
    {
      title: "Jobshot Manager",
      dates: "May 2025",
      location: "Calgary, Alberta",
      description:
        "Built a contractor job tracking app for uploading job photos, reviewing drafts, and organizing projects, with Supabase storage and row-level access policies.",
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
      dates: "March - June 2024",
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
