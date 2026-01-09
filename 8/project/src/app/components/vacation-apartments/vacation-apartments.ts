import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vacation-apartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vacation-apartments.html',
  styleUrls: ['./vacation-apartments.css'],
})
export class VacationApartmentsComponent {
  apartments = [
    { title: 'דירת 3 חדרים במרכז', price: 2500 },
    { title: 'פנטהאוז יוקרתי', price: 30000 },
    { title: 'דירת גן שקטה', price: 5000 }
  ];
}