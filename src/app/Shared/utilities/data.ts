import { IServices, SocialMedia } from '../models/model';

export const SOCIAL_LINKS: SocialMedia[] = [
  {
    id: 1,
    title: 'Facebook',
    icon: 'bi bi-facebook',
    link: '',
  },
  {
    id: 2,
    title: 'Youtube',
    icon: 'bi bi-youtube',
    link: '',
  },
  {
    id: 3,
    title: 'Instagram',
    icon: 'bi bi-instagram',
    link: '',
  },
  {
    id: 4,
    title: 'Whatsapp',
    icon: 'bi bi-whatsapp',
    link: '',
  },
];

export const EMAIL_ID: string = 'stgeorgemelodiesandmedia@gmail.com';
export const PHONE_NUMBER: string[] = ['+91 73568 60423', '+91 75948 75686 '];

export const SERVICES: IServices[] = [
  {
    id: 1,
    // title: 'Photography',
    title: 'ByeBerry Weddings',
    description:
      'Explore the magic of our photography services, where every click captures your special moments. Our talented photographers deliver stunning visuals, ensuring every memory is preserved beautifully.',
    image: 'Images/photography-service.jpg',
    category: 'photography',
    link: '',
  },
  {
    id: 2,
    // title: 'Live Streaming',
    title: 'SG Live Media',
    description:
      'Experience the power of live streaming. Connect with your audience in real-time, ensuring every moment of your event is accessible and engaging for all.',
    image: 'Images/streaming.jpg',
    category: 'streaming',
    link: '',
  },
  {
    id: 3,
    // title: 'Stage Decoration',
    title: 'SG Events',
    description:
      'Create a breathtaking ambiance with our exquisite stage decorations. From elegant arrangements to themed backdrops, we ensure every detail adds a touch of magic to your event.',
    image: 'Images/stage.JPG',
    category: 'streaming',
    link: '',
  },
  {
    id: 4,
    // title: 'Choir Services',
    title: 'SG Melodies',
    description:
      'Enhance your event with our enchanting wedding choirs. Our talented vocalists provide a beautiful, harmonious backdrop, adding an extra touch of magic to your special moments.',
    image: 'Images/choir.jpg',
    category: 'streaming',
    link: '',
  },
  {
    id: 5,
    // title: 'Light & Sound',
    title: 'SG Pro Audios',
    description:
      'Transform your event with our cutting-edge light and sound services. We create an immersive atmosphere, ensuring every moment is highlighted.',
    image: 'Images/sounds.jpg',
    category: 'streaming',
    link: '',
  },
];
