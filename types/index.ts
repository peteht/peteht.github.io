export interface Award {
  icon: string;
  href: string;
}

export interface Project {
  name: string;
  url: string;
  href: string;
  awards: Award[];
  descriptions: string[];
  role: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export type Era = "1990" | "1997" | "2008" | "2016" | "2026";
