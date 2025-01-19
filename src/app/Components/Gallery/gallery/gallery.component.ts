import { Component, OnInit } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { PageHeroComponent } from '../../../Shared/page-hero/page-hero.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [LightboxModule, PageHeroComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryId = 'myLightbox';
  Images: GalleryItem[] = [];
  title = 'Gallery';
  description = `Welcome to our gallery — a curated collection showcasing the artistry and creativity of our event management
                and photography services. We invite you to explore our work, from elegant weddings and corporate events to intimate family gatherings
                and artistic portraits. Let us capture the moments that matter to you.`;

  constructor(public gallery: Gallery, private lightbox: Lightbox) {}

  ngOnInit() {
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
  }

  openLightbox(index: number) {
    this.lightbox.open(index, this.galleryId, {
      panelClass: 'fullscreen',
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
    });
  }
}

const data = [
  {
    srcUrl: 'Images/carousel1.jpg',
    previewUrl: 'Images/carousel1.jpg',
  },
  {
    srcUrl: 'Images/carousel2.jpg',
    previewUrl: 'Images/carousel2.jpg',
  },
  {
    srcUrl: 'Images/carousel3.jpg',
    previewUrl: 'Images/carousel3.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  },
];
