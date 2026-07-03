import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CollageImage {
  src: string;
  alt: string;
  className: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  collageImages: CollageImage[] = [
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.38%20PM.jpeg', alt: 'Panchajanya textile display', className: 'simple-collage__wide' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.39%20PM.jpeg', alt: 'Textile fabric close-up', className: 'simple-collage__tall' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.40%20PM%20(1).jpeg', alt: 'Premium fabric arrangement', className: 'simple-collage__small' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.40%20PM.jpeg', alt: 'Finished textile collection', className: 'simple-collage__small' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.41%20PM%20(1).jpeg', alt: 'Textile product showcase', className: 'simple-collage__small' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.41%20PM.jpeg', alt: 'Fabric display close-up', className: 'simple-collage__tall' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.42%20PM%20(1).jpeg', alt: 'Premium textile arrangement', className: 'simple-collage__small' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.42%20PM.jpeg', alt: 'Retail textile display', className: 'simple-collage__wide' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.45%20PM.jpeg', alt: 'Collection detail', className: 'simple-collage__small' },
    { src: 'assets/WhatsApp%20Image%202026-07-03%20at%206.17.46%20PM.jpeg', alt: 'Textile stock showcase', className: 'simple-collage__small' }
  ];
}
