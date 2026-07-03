import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-return-policy',
  standalone: true,
  imports: [RouterLink, FooterComponent],
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.css'
})
export class ReturnPolicyComponent {
  lastUpdated = 'July 2026';
}
