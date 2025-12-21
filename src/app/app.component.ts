import { Component, HostListener } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
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
  // activeFragment;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.setSrcolltoTopVisiblity();
    this.setNavBarVisiblity();
  }

  constructor(public route: ActivatedRoute, public router: Router) {
    // this.activeFragment = this.route.fragment.pipe(share());
  }

  ngOnInit(): void {
    // this.router.events.subscribe(() => {
    //   this.setCurrentRoute();
    // });
    // this.setCurrentRoute();
  }

  // private setCurrentRoute(): void {
  //   this.currentRoute = this.router.url.split('#')[0];
  // }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  private setSrcolltoTopVisiblity() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const scrollBtn = document.getElementById('goto-top');
    const navBar = document.getElementById('nav-header');
    if (scrollBtn) {
      scrollBtn.style.setProperty('--scroll', `${scrolled}%`);
      if (winScroll > 400) {
        scrollBtn.style.display = 'grid';
      } else {
        scrollBtn.style.display = 'none';
      }
    }
  }
  private setNavBarVisiblity() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const navBar = document.getElementById('nav-header');
    if (navBar) {
      if (winScroll > 500) {
        navBar.classList.add('nav-header-with-bg');
        navBar.style.display = 'grid';
      } else {
        if (navBar.classList.contains('nav-header-with-bg')) {
          navBar.classList.remove('nav-header-with-bg');
        }
      }
    }
  }
}
