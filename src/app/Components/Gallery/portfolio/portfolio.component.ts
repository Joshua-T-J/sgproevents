import { Component, OnInit } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { CommonService } from '../../../Services/common.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-portfolio',
  imports: [LightboxModule, CarouselModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  images: any[] = [];
  Images: GalleryItem[] = [];
  galleryId = 'myLightbox';

  responsiveOptions: any[] | undefined;

  constructor(
    private commonService: CommonService,
    public gallery: Gallery,
    public lightbox: Lightbox
  ) {}

  ngOnInit() {
    this.images = this.commonService.getImages();
    this.initilizeImageGallery();

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  initilizeImageGallery() {
    this.Images = this.images.map(
      (item, index) =>
        new ImageItem({ args: index, src: item.srcUrl, thumb: item.previewUrl })
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

// galleryId = 'myLightbox';
// Images: GalleryItem[] = [];
// imageData = data;
// cardPerPage: number = 4;
// noofSlides: number = 0;
// slides: number[] = [];

// constructor(
//   public gallery: Gallery,
//   public lightbox: Lightbox,
//   private breakpointObserver: BreakpointObserver
// ) {}

// ngOnInit() {
//   this.initilizeImageGallery();
//   this.breakpointObserver
//     .observe([
//       Breakpoints.XSmall,
//       Breakpoints.Small,
//       Breakpoints.Medium,
//       Breakpoints.Large,
//       Breakpoints.XLarge,
//     ])
//     .subscribe((result: any) => {
//       if (result.matches) {
//         if (result.breakpoints[Breakpoints.XSmall]) {
//           this.cardPerPage = 1;
//         } else if (result.breakpoints[Breakpoints.Small]) {
//           this.cardPerPage = 2;
//         } else if (result.breakpoints[Breakpoints.Medium]) {
//           this.cardPerPage = 3;
//         } else if (result.breakpoints[Breakpoints.Large]) {
//           this.cardPerPage = 4;
//         } else {
//           this.cardPerPage = 4;
//         }
//       }
//       this.noofSlides = Math.ceil(this.Images.length / this.cardPerPage) || 0;
//       this.populateSlides();
//     });
// }

// populateSlides() {
//   this.slides = [];
//   for (let i = 1; i <= this.noofSlides; i++) {
//     this.slides.push(i);
//   }
// }

// initilizeImageGallery() {
//   this.Images = data.map(
//     (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
//   );

//   // Load Images into gallery
//   const galleryRef = this.gallery.ref(this.galleryId);
//   galleryRef.setConfig({
//     orientation: 'horizontal',
//     loadingStrategy: 'lazy',
//     loop: true,
//     imageSize: ImageSize.Contain,
//     thumbs: false,
//     thumbPosition: ThumbnailsPosition.Bottom,
//     thumbImageSize: ImageSize.Cover,
//     nav: true,
//     navIcon: '<i class="bi bi-chevron-right"></i>',
//     counter: true,
//     counterPosition: 'bottom',
//   });
//   galleryRef.load(this.Images);

//   this.lightbox.setConfig({
//     panelClass: 'fullscreen',
//     hasBackdrop: true,
//     backdropClass: 'dark-backdrop',
//   });
// }
