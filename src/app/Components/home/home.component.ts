import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgClass, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  Images: carouselImage[] = [
    {
      Id: 1,
      // ImageUrl: 'Images/carousel1.jpg',
      ImageUrl:
        'https://solene.qodeinteractive.com/wp-content/uploads/2020/01/h1-slider-img-1.jpg',
      ImageAltText: 'Carousel Image 1',
      ImageTitle: 'First slide label',
      ImageDescription:
        'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      Id: 2,
      // ImageUrl: 'Images/carousel2.jpg',
      ImageUrl:
        'https://solene.qodeinteractive.com/wp-content/uploads/2019/12/h1-slider-img-3.new_.jpg',
      ImageAltText: 'Carousel Image 2',
      ImageTitle: 'First slide label',
      ImageDescription:
        'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      Id: 3,
      // ImageUrl: 'Images/carousel3.jpg',
      ImageUrl:
        'https://solene.qodeinteractive.com/wp-content/uploads/2019/11/h1-slider-img-2.jpg',
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
