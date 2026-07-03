import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form = { name: '', phone: '', business: '', message: '' };
  submitted = false;

  offices = [
    {
      city: 'Madurai',
      label: 'Head Office',
      addressLines: ['255, Vasuki 1st Lane, Valluvar Colony,', 'P & T Nagar Main Road,', 'Madurai – 625017'],
      phones: ['0452 2643025', '2643026', '2643027', '4390007'],
      mobile: '+91 98423 53698',
      mobileHref: 'tel:+919842353698',
      email: 'panchajanya.madurai@gmail.com',
      mapsLink: 'https://maps.app.goo.gl/YGrst8rxgYWAQu6DA',
      icon: 'fas fa-building'
    },
    {
      city: 'Chennai',
      label: 'Branch Office',
      addressLines: ['5/1, First Floor, Popular Parcel Service Yard,', 'Thiru Valluvar Salai, MGR Thottam,', 'Ramapuram, Chennai – 600089'],
      phones: ['044 22491085'],
      mobile: '+91 73050 36961',
      mobileHref: 'tel:+917305036961',
      email: 'panchajanya.chennai@gmail.com',
      mapsLink: 'https://maps.app.goo.gl/v28W59xjjictdHut6',
      icon: 'fas fa-map-marker-alt'
    }
  ];

  submitForm() {
    this.submitted = true;
    setTimeout(() => { this.submitted = false; this.form = { name: '', phone: '', business: '', message: '' }; }, 4000);
  }
}
