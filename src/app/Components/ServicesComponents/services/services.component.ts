import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'ByeBerry Weddings',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/Images/photography.jpg',
    },
    {
      id: 2,
      title: 'SG Live Media',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/Images/streaming.jpg',
    },
    {
      id: 3,
      title: 'SG Events',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/Images/stage.JPG',
    },
  ];
}

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
