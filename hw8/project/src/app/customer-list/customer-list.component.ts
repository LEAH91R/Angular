
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 2px solid #27ae60; padding: 15px; border-radius: 10px; background-color: #f4fff8;">
      <h2 style="color: #2c3e50;">👥 רשימת לקוחות פעילים</h2>
      <ul>
        <li *ngFor="let customer of customers">{{ customer }}</li>
      </ul>
    </div>
  `
})
export class CustomerListComponent {
  customers: string[] = ['משה כהן', 'יצחק לוי', 'אברהם פרידמן', 'יוסף מזרחי'];
}