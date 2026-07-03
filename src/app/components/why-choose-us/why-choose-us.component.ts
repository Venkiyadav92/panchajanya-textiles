import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css'
})
export class WhyChooseUsComponent {
  features = [
    { icon: 'fas fa-certificate', title: 'Authorized Distributor', desc: 'Official authorized distributor for 5 leading textile brands, ensuring 100% genuine products with full manufacturer support.', color: '#7B1A1A' },
    { icon: 'fas fa-medal', title: 'Trusted Since 1995', desc: 'Nearly 3 decades of industry experience with a proven track record of reliability and excellence in textile distribution.', color: '#C5973A' },
    { icon: 'fas fa-truck', title: 'Pan Tamil Nadu Delivery', desc: 'Efficient distribution network covering all major cities and districts in Tamil Nadu with timely, safe bulk order deliveries.', color: '#1a3a5c' },
    { icon: 'fas fa-tags', title: 'Best Distributor Pricing', desc: 'As authorized distributors, we offer the most competitive trade pricing for maximum margin and value for retail partners.', color: '#2d5a27' },
    { icon: 'fas fa-boxes', title: 'Bulk Order Ready', desc: 'Fully equipped for large institutional and retail bulk orders with adequate stock maintained across all product categories.', color: '#6B1C1C' },
    { icon: 'fas fa-headset', title: 'Dedicated Support', desc: 'Dedicated relationship managers, prompt after-sales support, complaint resolution, and replacement assistance.', color: '#4a1a6b' },
    { icon: 'fas fa-shield-alt', title: 'Quality Guaranteed', desc: 'Every product carries manufacturer warranty and our quality assurance. Strict quality checks before every dispatch.', color: '#1a4a2e' },
    { icon: 'fas fa-handshake', title: 'Long-term Partnerships', desc: 'Special credit terms and priority stock allocation for our loyal retail partners. Building relationships that last.', color: '#7B1A1A' },
  ];
}
