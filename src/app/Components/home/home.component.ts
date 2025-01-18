import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  Images: carouselImage[] = [
    {
      Id: 1,
      ImageUrl: 'Images/carousel1.jpg',
      ImageAltText: 'Carousel Image 1',
      ImageTitle: 'First slide label',
      ImageDescription:
        'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      Id: 2,
      ImageUrl: 'Images/carousel2.jpg',
      ImageAltText: 'Carousel Image 2',
      ImageTitle: 'First slide label',
      ImageDescription:
        'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      Id: 3,
      ImageUrl: 'Images/carousel3.jpg',
      ImageAltText: 'Carousel Image 3',
      ImageTitle: 'First slide label',
      ImageDescription:
        'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ];
}

interface carouselImage {
  Id: number;
  ImageUrl: string;
  ImageAltText: string;
  ImageTitle?: string;
  ImageDescription?: string;
}
