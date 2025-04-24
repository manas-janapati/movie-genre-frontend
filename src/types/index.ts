// Common Types
export interface NavItem {
  name: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Technology {
  name: string;
  description: string;
  icon: string;
}

// API Types
export interface PredictionRequest {
  description: string;
}

export interface PredictionResponse {
  genres: string[];
}