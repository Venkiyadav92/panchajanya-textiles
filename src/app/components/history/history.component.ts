import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  milestones = [
    { year: '1995', title: 'Company Founded', desc: 'Started as a wholesale fabric supplier in Madurai.', icon: 'fas fa-store', side: 'left' },
    { year: '2000', title: 'Bombay Dyeing Partner', desc: 'Became an authorized Bombay Dyeing distributor.', icon: 'fas fa-handshake', side: 'right' },
    { year: '2005', title: 'Uniform Expansion', desc: 'Extended into uniforms for schools and institutions.', icon: 'fas fa-tshirt', side: 'left' },
    { year: '2010', title: 'Trident & Aspire', desc: 'Added Trident and Aspire to our portfolio.', icon: 'fas fa-award', side: 'right' },
    { year: '2015', title: 'Indo Count & Memoir', desc: 'Brought Indo Count and Memoir onboard.', icon: 'fas fa-certificate', side: 'left' },
    { year: '2020', title: 'Pan Tamil Nadu Reach', desc: 'Built a wider distribution network across the state.', icon: 'fas fa-network-wired', side: 'right' },
    { year: '2024', title: 'Digital Growth', desc: 'Expanded digitally and strengthened our dealer base.', icon: 'fas fa-rocket', side: 'left' }
  ];
}
