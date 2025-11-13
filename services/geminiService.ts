import { GoogleGenAI, Chat } from "@google/genai";
import { PROJECTS, REFLECTIONS, LINKEDIN_URL, GITHUB_URL, PRACTICAL_SKILLS, SOFT_SKILLS, PERSONAL_ACHIEVEMENTS } from '../constants';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

let chat: Chat | null = null;

const formatPortfolioData = (): string => {
  const projectDetails = PROJECTS.map(p => 
    `- Title: ${p.title}\n  Description: ${p.description}\n  Technologies: ${p.tags.join(', ')}`
  ).join('\n\n');

  const reflectionDetails = REFLECTIONS.map(r =>
    `- Week ${r.week}: ${r.title}\n  Key Points:\n${r.points.map(pt => `    - ${pt}`).join('\n')}`
  ).join('\n\n');

  const practicalSkills = PRACTICAL_SKILLS.join(', ');
  const softSkills = SOFT_SKILLS.join(', ');

  const personalAchievements = PERSONAL_ACHIEVEMENTS.map(a => 
    `- ${a.title}: ${a.description}`
  ).join('\n');

  const aboutMe = `
Hello! I’m Nirmal Bhakuni, a passionate B.Tech student with a strong interest in software development, algorithms, and problem-solving. I love transforming ideas into real-world applications through clean and efficient code.
Throughout my academic journey, I’ve maintained excellent performance, scoring 96.2% in high school and 95.5% in intermediate, while actively participating in quiz competitions and chess championships.
My goal is to become a skilled software engineer capable of designing scalable, impactful solutions that make a difference. I enjoy collaborating in teams, exploring new technologies, and constantly pushing my limits to learn more every day.
Interests: Competitive programming, UI/UX design for terminal-based systems, Open-source collaboration, AI-driven automation tools.
`;

  return `
    This is the portfolio of Nirmal Bhakuni.
    
    ABOUT NIRMAL:
    ${aboutMe}

    ---
    
    Contact & Socials:
    - LinkedIn: ${LINKEDIN_URL}
    - GitHub: ${GITHUB_URL}

    ---

    ACCOMPLISHMENTS & AWARDS:
    ${personalAchievements}

    ---

    SKILLS:
    - Practical Skills: ${practicalSkills}
    - Soft Skills: ${softSkills}

    ---

    PROJECTS:
    ${projectDetails}

    ---

    PESE LAB WEEKLY REFLECTIONS:
    ${reflectionDetails}
  `;
};

const getChatSession = (): Chat => {
  if (chat) {
    return chat;
  }

  const portfolioContext = formatPortfolioData();
  const systemInstruction = `You are a friendly and professional AI assistant for Nirmal Bhakuni's e-portfolio. Your name is 'NirmalAI'.
  Your purpose is to answer questions about Nirmal's skills, projects, and learning experiences based ONLY on the information provided below.
  Do not invent any information or answer questions outside of this context. If a question is unrelated to Nirmal's portfolio, politely decline to answer.
  Keep your answers concise and helpful.

  Here is Nirmal's portfolio information:
  ${portfolioContext}
  `;

  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
    },
  });

  return chat;
};

export const sendMessageToAI = async (message: string): Promise<string> => {
  try {
    const chatSession = getChatSession();
    const response = await chatSession.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};