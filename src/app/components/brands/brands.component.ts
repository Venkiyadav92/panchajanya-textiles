import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  brandLogos = [
    { src: 'assets/bombay%20Logo.svg', alt: 'Bombay Dyeing logo' },
    { src: 'assets/Trident_Logo.svg', alt: 'Trident logo' },
    { src: 'assets/indo-count-logo.png', alt: 'Indo Count logo' },
    { src: 'assets/Aspire%20Logo.svg', alt: 'Aspire logo' },
    { src: 'assets/memoir%20Logo.webp', alt: 'Memoir logo' }
  ];
}
