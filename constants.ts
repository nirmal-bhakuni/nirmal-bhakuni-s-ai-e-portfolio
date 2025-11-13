import { Project, Reflection, PersonalAchievement } from './types';

export const LINKEDIN_URL = "https://www.linkedin.com/in/nirmal-bhakuni-1b1726261/";
export const GITHUB_URL = "https://github.com/nirmal-bhakuni"; // Assuming a github profile from name

export const PRACTICAL_SKILLS: string[] = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "Go",
  "React.js",
  "AI/Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "System Design",
  "Cloud Computing",
  "Network Analysis",
  "Cryptography",
  "Node.js (learning)",
  "MySQL",
  "Git",
  "VS Code",
  "Linux",
  "ncurses"
];

export const SOFT_SKILLS: string[] = [
  "Effective Communication",
  "Critical Thinking",
  "Problem Solving",
  "Collaboration & Teamwork",
  "Active Listening",
  "Public Speaking",
  "Self-Assessment & Reflection",
  "Adaptability"
];

export const PERSONAL_ACHIEVEMENTS: PersonalAchievement[] = [
  {
    title: "School Topper",
    description: "Achieved the highest academic rank in my graduating class.",
  },
  {
    title: "NDA Qualified (Twice)",
    description: "Successfully qualified for the National Defence Academy entrance examination on two separate occasions.",
  },
  {
    title: "TECHKRITI Winner",
    description: "Secured the first position in TECHKRITI, a competitive coding event.",
  }
];


export const PROJECTS: Project[] = [
  {
    title: "Amazon Clone",
    description: "A front-end replica of Amazon with a modern UI/UX, focusing on component-based architecture and state management.",
    tags: ["React", "JavaScript", "Frontend", "UI/UX"],
    url: "https://github.com/nirmal-bhakuni/Amazon-clone"
  },
  {
    title: "GEHU Clubs",
    description: "A dynamic platform for managing college clubs and events, designed to streamline student engagement and communication.",
    tags: ["React", "Node.js", "Full Stack", "College"],
    url: "https://github.com/nirmal-bhakuni/GEHU-clubs"
  },
  {
    title: "Anonymous Feedback System",
    description: "A secure feedback platform that enables students to share opinions anonymously, fostering transparency.",
    tags: ["Web App", "Anonymity", "Security"],
    url: "https://github.com/nirmal-bhakuni/anonymous-feedback-gehu.com"
  },
  {
    title: "Trading Share Portfolio Management System",
    description: "A modular, console-based system written in C for tracking stock portfolios and managing profits/losses.",
    tags: ["C", "Data Structures", "ncurses", "CLI"],
    url: "https://github.com/nirmal-bhakuni/Trading-Share-Portfolio-Management-System"
  },
  {
    title: "Bus Route Finder",
    description: "A system using React, C++, and MySQL to find optimized bus routes in Dehradun, featuring an efficient backend.",
    tags: ["React", "C++", "MySQL", "System Design"],
    url: "https://github.com/nirmal-bhakuni/BusRouteFinder"
  }
];

export const REFLECTIONS: Reflection[] = [
  {
    week: 1,
    title: "Introduction to SWOC Reflection",
    points: [
      "Identified my core Strengths (e.g., curiosity in AI, persistence in problem-solving).",
      "Recognized Weaknesses like overthinking and working on improving decisiveness.",
      "Realized that honest self-assessment builds genuine confidence and clarity."
    ]
  },
  {
    week: 2,
    title: "Having Clarity of Plans",
    points: [
      "Defined my goal: to become a software engineer or tech startup founder.",
      "Understood that clear short-term actions (like building AI projects) lead to long-term success.",
      "Committed to aligning daily learning with my career vision."
    ]
  },
  {
    week: 3,
    title: "Sharing Achievements",
    points: [
      "Practiced confidently presenting my projects (e.g., AI agents, encrypted storage system).",
      "Learned that sharing progress reinforces self-belief and invites valuable feedback.",
      "Focused on speaking with humility while owning my efforts."
    ]
  },
  {
    week: 4,
    title: "Learning from Others’ Achievements",
    points: [
      "Observed how peers approach cybersecurity and AI challenges differently.",
      "Drew inspiration from their discipline, creativity, and execution.",
      "Recognized that collaboration accelerates individual growth."
    ]
  },
  {
    week: 5,
    title: "Speaking About Myself",
    points: [
      "Prepared a clear, structured self-introduction highlighting my interests in AI and security.",
      "Reduced nervousness by practicing regularly and focusing on message—not perfection.",
      "Gained confidence in communicating my academic and project journey."
    ]
  },
  {
    week: 6,
    title: "Listening and Analyzing Self-Introductions",
    points: [
      "Noticed how tone, pace, and eye contact affect listener engagement.",
      "Learned to listen actively—not just to respond, but to understand.",
      "Improved my own delivery by adopting effective techniques from others."
    ]
  },
  {
    week: 7,
    title: "Mid-Term Practical – Speaking About My Strengths",
    points: [
      "Spoke confidently about my technical strengths: C++, AI modeling, and system design.",
      "Practiced articulating strengths under time pressure during mock sessions.",
      "Realized that knowing your value helps you contribute more meaningfully."
    ]
  },
  {
    week: 8,
    title: "Analyzing Situations and Expressing Opinions",
    points: [
      "Analyzed ethical dilemmas in AI and data privacy with reasoned arguments.",
      "Expressed views respectfully, even when disagreeing.",
      "Strengthened critical thinking by backing opinions with logic, not just emotion."
    ]
  },
  {
    week: 9,
    title: "Group Discussion on a TED Talk Topic",
    points: [
      "Participated actively in discussions on innovation and responsible tech.",
      "Balanced speaking and listening to ensure inclusive, productive dialogue.",
      "Learned that impactful communication combines clarity, empathy, and confidence."
    ]
  },
  {
    week: 10,
    title: "Art of Conversation, Telephone Etiquettes & Public Speaking (Extempore and JAM Sessions)",
    points: [
      "Learned key principles of effective conversation—active listening, clarity, and respectful engagement.",
      "Practiced professional telephone etiquettes, including tone, structure, and appropriate language for formal calls."
    ]
  }
];