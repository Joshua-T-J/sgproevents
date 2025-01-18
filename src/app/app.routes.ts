import { Routes } from '@angular/router';
import { GalleryComponent } from './Components/Gallery/gallery/gallery.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { AllServicesComponent } from './Components/ServicesComponents/all-services/all-services.component';
import { AboutComponent } from './Components/About/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainPageComponent },
  { path: 'home', redirectTo: '', component: MainPageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'services', component: AllServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
