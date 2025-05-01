import { Component } from '@angular/core';
import { PageHeroComponent } from '../../../Shared/page-hero/page-hero.component';

@Component({
    selector: 'app-about',
    imports: [PageHeroComponent],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  title = 'About';
  description = `We are SG Pro Events, where we believe that every moment is worth celebrating and capturing. 
                  Founded with a passion for excellence and a keen eye for detail,
                  we specialize in providing top-tier event management and photography services that transform
                  your vision into reality.
                  <br><br>
                  Here, we take pride in our commitment to excellence, attention to detail,
                  and personalized approach. Our team of dedicated professionals works
                  tirelessly to ensure that your event is nothing short of extraordinary.
                  We believe in building lasting relationships with our
                  clients and exceeding their expectations every step of the way.`;
}
