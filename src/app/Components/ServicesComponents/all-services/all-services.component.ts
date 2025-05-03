import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeroComponent } from '../../../Shared/page-hero/page-hero.component';
import { RouterLink } from '@angular/router';
import { IServices } from '../../../Shared/models/model';
import { SERVICES } from '../../../Shared/utilities/data';

@Component({
  selector: 'app-all-services',
  imports: [NgClass, PageHeroComponent, RouterLink],
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.scss',
})
export class AllServicesComponent {
  title = 'Services';
  description = `We specialize in transforming your events into unforgettable experiences
                with our comprehensive range of offerings. From capturing timeless moments with our photography services to
                creating breathtaking ambiances with our decorations, we ensure every detail is perfect. Our live streaming
                services bring your events to loved ones near and far, while our state-of-the-art sound systems and enchanting
                wedding choirs add an extra layer of magic.
                Explore our services and let us make your special moments truly extraordinary.`;
  services: IServices[] = SERVICES;
}
