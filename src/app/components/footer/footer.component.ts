import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {}

  links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our History', href: '#history' },
    { label: 'Brands', href: '#brands' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  policyLinks = [
    { label: 'Terms & Conditions', route: '/terms' },
    { label: 'Privacy Policy', route: '/privacy-policy' },
    { label: 'Return Policy', route: '/return-policy' },
  ];

  brands = ['Bombay Dyeing', 'Trident', 'Indo Count', 'Aspire', 'Memoir'];

  offices = [
    {
      city: 'Madurai',
      address: '255, Vasuki 1st Lane, Valluvar Colony, P & T Nagar Main Road, Madurai – 625017',
      phone: '0452 2643025',
      mobile: '+91 98423 53698',
    },
    {
      city: 'Chennai',
      address: '5/1, First Floor, Popular Parcel Service Yard, Thiru Valluvar Salai, MGR Thottam, Ramapuram, Chennai – 600089',
      phone: '044 22491085',
      mobile: '+91 73050 36961',
    },
  ];

  scrollTo(href: string) {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 100);
      });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}
