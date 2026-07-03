import { Component } from '@angular/core';

@Component({
  selector: 'app-call-button',
  standalone: true,
  imports: [],
  templateUrl: './call-button.component.html',
  styleUrl: './call-button.component.css'
})
export class CallButtonComponent {
  phone = '+919842353698';
}

