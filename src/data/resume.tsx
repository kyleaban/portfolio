import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kyle Aban",
  initials: "KA",
  url: "https://kyleaban.io",
  location: "Atlanta, GA",
  locationLink: "https://www.google.com/maps/place/atlanta",
  description:
    "Software Engineer and trailblazer. I love building things and helping people.",
  summary:
    "Currently exploring new opportunities while building and scaling my own SaaS apps on the weekends. In the past, I pursued a degree in computer science and business, interned at big tech companies in Atlanta, and helped organize UGA's only ever virtual hackathon. While Im not dissecting the newest trends in tech, you'll often find me at your local tennis court!",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Angular",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "Flask",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+1 678 499 4449",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kyleaban",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kyle-aban/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Automatic Data Processing",
      href: "https://www.adp.com/",
      badges: [],
      location: "Alpharetta, GA",
      title: "Application Developer",
      logoUrl: "/adp_logo.jpg",
      start: "August 2021",
      end: "Juy 2024",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Automatic Data Processing",
      href: "https://www.adp.com/",
      badges: [],
      location: "Alpharetta, GA",
      title: "Application Developer Intern",
      logoUrl: "/adp_logo.jpg",
      start: "June 2020",
      end: "July 2020",
      description:
        "Implemented a robust working version of darkmode for the myADP web application and ensured that it functioned across multiple platforms. Developed an open source environment to allow further feature enhancements using new components.",
    },
    {
      company: "Cisco Systems",
      href: "https://www.cisco.com/",
      badges: [],
      location: "Lawrenceville, GA",
      title: "Intern",
      logoUrl: "/cisco_logo.png",
      start: "June 2017",
      end: "August 2017",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
  ],
  education: [
    {
      school: "University of Georgia",
      href: "https://www.uga.edu/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/uga_logo.webp",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;