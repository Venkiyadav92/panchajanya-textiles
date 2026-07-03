import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { HistoryComponent } from '../../components/history/history.component';
import { BrandsComponent } from '../../components/brands/brands.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CallButtonComponent } from '../../components/call-button/call-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    HistoryComponent,
    BrandsComponent,
    WhyChooseUsComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    CallButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
