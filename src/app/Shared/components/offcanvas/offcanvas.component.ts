import { Component } from '@angular/core';
import { SocialIconsComponent } from '../social-icons/social-icons.component';

@Component({
  selector: 'app-offcanvas',
  imports: [SocialIconsComponent],
  templateUrl: './offcanvas.component.html',
  styleUrl: './offcanvas.component.scss',
})
export class OffcanvasComponent {}
