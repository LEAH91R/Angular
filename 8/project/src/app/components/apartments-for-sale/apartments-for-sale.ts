import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-for-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartments-for-sale.html',
  styleUrls: ['./apartments-for-sale.css'],
})
export class ApartmentsForSaleComponent {
  apartments = [
    { title: 'דירת 3 חדרים במרכז', price: 2500000 },
    { title: 'פנטהאוז יוקרתי', price: 5200000 },
    { title: 'דירת גן שקטה', price: 3100000 }
  ];
}