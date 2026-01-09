import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-for-rent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartments-for-rent.component.html',
  styleUrls: ['./apartments-for-rent.css'],
})
export class ApartmentsForRent {
  apartments = [
    { title: 'דירת 3 חדרים במרכז', price: 2500 },
    { title: 'פנטהאוז יוקרתי', price: 5200 },
    { title: 'דירת גן שקטה', price: 3100 }
  ];
}