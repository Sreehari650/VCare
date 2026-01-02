export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  specialties?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  detailed?: boolean;
  testimonial?: {
    quote: string;
    author: string;
  };
  imageUrl?: string;
  fullDescription?: string;
}

export interface ValueProps {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: "General" | "Therapy & Process" | "Insurance & Billing" | "Confidentiality";
}
