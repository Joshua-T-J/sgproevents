import { Component } from '@angular/core';

@Component({
  selector: 'app-specialities',
  imports: [],
  templateUrl: './specialities.component.html',
  styleUrl: './specialities.component.scss',
})
export class SpecialitiesComponent {
  specialities: Speciality[] = [
    {
      id: 1,
      title: 'Event Management',
      subtitle: 'Events',
      description:
        'We provide comprehensive event management services to make your event a success.',
      image: '/Icons/calendar.png',
    },
    {
      id: 2,
      title: 'Wedding Photography',
      subtitle: 'Photography',
      description:
        'Capture the most important day of your life with our wedding photography services.',
      image: '/Icons/camera.png',
    },
    {
      id: 3,
      title: 'Wedding Choir',
      subtitle: 'Choir',
      description:
        'Enhance your wedding ceremony with our professional choir services.',
      image: '/Icons/music.png',
    },
    {
      id: 4,
      title: 'Wedding Videography',
      subtitle: 'Videography',
      description:
        'Capture every moment of your special day with our wedding videography services.',
      image: '/Icons/video.png',
    },
  ];
}

interface Speciality {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
