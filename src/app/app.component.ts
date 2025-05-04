import { AsyncPipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { share } from 'rxjs';
import { FooterComponent } from './Components/footer/footer.component';
import { OffcanvasComponent } from './Shared/components/offcanvas/offcanvas.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    OffcanvasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SGProEvents';
  currentRoute: string = '';
  activeFragment;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const scrollBtn = document.getElementById('goto-top');
    if (scrollBtn) {
      scrollBtn.style.setProperty('--scroll', `${scrolled}%`);
      if (winScroll > 400) {
        scrollBtn.style.display = 'grid';
      } else {
        scrollBtn.style.display = 'none';
      }
    }
  }

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

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
