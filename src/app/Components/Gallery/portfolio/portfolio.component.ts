import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [LightboxModule, SlicePipe, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  galleryId = 'myLightbox';
  Images: GalleryItem[] = [];
  imageData = data;
  cardPerPage: number = 4;
  noofSlides: number = 0;
  slides: number[] = [];

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.initilizeImageGallery();
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result: any) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cardPerPage = 1;
          } else if (result.breakpoints[Breakpoints.Small]) {
            this.cardPerPage = 2;
          } else if (result.breakpoints[Breakpoints.Medium]) {
            this.cardPerPage = 3;
          } else if (result.breakpoints[Breakpoints.Large]) {
            this.cardPerPage = 4;
          } else {
            this.cardPerPage = 4;
          }
        }
        this.noofSlides = Math.ceil(this.Images.length / this.cardPerPage) || 0;
        this.populateSlides();
      });
  }

  populateSlides() {
    this.slides = [];
    for (let i = 1; i <= this.noofSlides; i++) {
      this.slides.push(i);
    }
  }

  initilizeImageGallery() {
    this.Images = data.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

    // Load Images into gallery
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.setConfig({
      orientation: 'horizontal',
      loadingStrategy: 'lazy',
      loop: true,
      imageSize: ImageSize.Contain,
      thumbs: false,
      thumbPosition: ThumbnailsPosition.Bottom,
      thumbImageSize: ImageSize.Cover,
      nav: true,
      navIcon: '<i class="bi bi-chevron-right"></i>',
      counter: true,
      counterPosition: 'bottom',
    });
    galleryRef.load(this.Images);

    this.lightbox.setConfig({
      panelClass: 'fullscreen',
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
    });
  }
}

const data = [
  {
    srcUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/11/pic-02.jpg?customize=template',
    previewUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/11/pic-02.jpg?customize=template',
  },
  {
    srcUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/11/pic-03.jpg?customize=template',
    previewUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/11/pic-03.jpg?customize=template',
  },
  {
    srcUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/11/pic-04.jpg?customize=template',
    previewUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/11/pic-04.jpg?customize=template',
  },
  {
    srcUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/07/gallery-02-free-img.jpg',
    previewUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/07/gallery-02-free-img.jpg',
  },
  {
    srcUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/07/gallery-03-free-img.jpg',
    previewUrl:
      'https://websitedemos.net/wedding-organizer-04/wp-content/uploads/sites/454/2019/07/gallery-03-free-img.jpg',
  },
];
