export type Language = 'az' | 'en' | 'ru';

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  badge?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  tag: string;
  details?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppScreen {
  id: string;
  title: string;
  role: 'user' | 'driver';
  category: string;
  description: string;
  figmaSlotName: string;
  // If a real Figma export screenshot is placed in /public/screens or /assets, pass the path here:
  imageSrc?: string;
}
