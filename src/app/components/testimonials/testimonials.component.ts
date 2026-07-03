import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'Rajesh Kumar', biz: 'Madurai', text: 'Reliable quality and quick delivery.', initials: 'RK' },
    { name: 'Priya Subramaniam', biz: 'Coimbatore', text: 'Great service and premium bed collections.', initials: 'PS' },
    { name: 'Mohammed Farook', biz: 'Chennai', text: 'Trusted supplier for our bulk orders.', initials: 'MF' }
  ];
}
