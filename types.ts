export type Page = 'home' | 'about' | 'projects' | 'achievements' | 'takeaways' | 'skills' | 'assignments';

export interface Message {
  sender: 'user' | 'model';
  text: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Reflection {
  week: number;
  title: string;
  points: string[];
}

export interface PersonalAchievement {
  title: string;
  description: string;
}