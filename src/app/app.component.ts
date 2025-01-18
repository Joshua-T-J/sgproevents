import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { share } from 'rxjs';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    AsyncPipe,
    RouterLinkActive,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SGProEvents';
  currentRoute: string = '';
  activeFragment;
  constructor(public route: ActivatedRoute, public router: Router) {
    this.activeFragment = this.route.fragment.pipe(share());
  }
  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.setCurrentRoute();
    });
    this.setCurrentRoute();
  }
  private setCurrentRoute(): void {
    this.currentRoute = this.router.url.split('#')[0];
  }
}
