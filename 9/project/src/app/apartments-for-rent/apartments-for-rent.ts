import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-for-rent',
  imports: [CommonModule],
  templateUrl: './apartments-for-rent.html',
  styleUrl: './apartments-for-rent.css',
})
export class ApartmentsForRent {
    apartments = [
    { name: 'דירה 1', price: 1000 },
    { name: 'דירה 2', price: 1500 },
    { name: 'דירה 3', price: 2000 }
  ];

}
