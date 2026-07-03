import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-our-stores',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  templateUrl: './our-stores.component.html',
  styleUrl: './our-stores.component.css'
})
export class OurStoresComponent {
  stores = [
    {
      name: 'Bombay Dyeing – Nexus Vijaya Mall',
      city: 'Chennai · Vadapalani',
      addressLines: ['Shop No. 201B, 2nd Floor,', 'Nexus Vijaya Mall, Arcot Road,', 'Vadapalani, Chennai – 600026'],
      mapsLink: 'https://maps.app.goo.gl/vDRYNfTPQjb8rjq79',
    },
    {
      name: 'Bombay Dyeing – The Marina Mall',
      city: 'Chennai · OMR',
      addressLines: ['13/1A, Rajiv Gandhi Salai (OMR),', 'Egattur,', 'Chennai – 600130'],
      mapsLink: 'https://maps.app.goo.gl/zujmurUJovJCifqSA',
    },
    {
      name: 'Bombay Dyeing – DB Road',
      city: 'Coimbatore',
      addressLines: ['70, Diwan Bahadur Road,', 'R.S. Puram,', 'Coimbatore – 641002'],
      mapsLink: 'https://maps.app.goo.gl/tNusPoJh9XKF7on86',
    },
    {
      name: 'Bombay Dyeing – South Masi Street',
      city: 'Madurai',
      addressLines: ['153, South Masi Street,', 'Mahal Area, Madurai Main,', 'Madurai – 625001'],
      mapsLink: 'https://maps.app.goo.gl/48Uz4GagnfTUeno2A',
    },
    {
      name: 'Bombay Dyeing – VE Road',
      city: 'Thoothukudi',
      addressLines: ['138, Victoria Extension Road,', 'Opp. Royal Furniture & Vasan Eye Hospital,', 'Thoothukudi – 628001'],
      mapsLink: 'https://maps.app.goo.gl/pmwLGN5Lo5L5k7Au8',
    },
  ];

  feedback = [
    { text: 'Consistent stock, fair pricing, and a team that always picks up the phone. Exactly what a retailer needs.', name: 'Rajesh Kumar', biz: 'Sri Murugan Home Textiles' },
    { text: 'Our bulk uniform orders are handled smoothly every single season. Dependable partner.', name: 'Kavitha Rajan', biz: 'GKR School Suppliers' },
    { text: 'Genuine products and on-time delivery. Panchajanya is our first call for home textiles.', name: 'Anitha Devi', biz: 'Krishna Enterprises' },
    { text: 'Great range of hospitality linen and quick turnaround. Highly recommend for bulk supply.', name: 'Mohammed Farook', biz: 'Al-Farook Traders' },
  ];
}
