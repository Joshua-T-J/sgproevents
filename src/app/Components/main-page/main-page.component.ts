import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

import { PortfolioComponent } from '../Gallery/portfolio/portfolio.component';
import { ServicesComponent } from '../ServicesComponents/services/services.component';
import { AboutUsComponent } from '../About/about-us/about-us.component';

@Component({
  selector: 'app-main-page',
  imports: [
    HomeComponent,
    PortfolioComponent,
    AboutUsComponent,
    ServicesComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
