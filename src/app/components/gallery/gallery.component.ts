import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  items = [
    { image: 'assets/bed1.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed2.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed16.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed3.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed4.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed5.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed6.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed7.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed8.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed9.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed10.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed11.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed12.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed13.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed14.png', alt: 'Comfort Sleep' },
    { image: 'assets/bed15.png', alt: 'Comfort Sleep' }
  ];
}
