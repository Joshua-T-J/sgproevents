export interface IServices {
  id: number;
  title: string;
  description: string;
  image: string;
  category?: string;
  link?: string;
}

export interface SocialMedia {
  id: number;
  title: string;
  icon: string;
  link: string;
}
