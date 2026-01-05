import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-for-sale',
  imports: [CommonModule],
  templateUrl: './apartments-for-sale.html',
  styleUrl: './apartments-for-sale.css',
})
export class ApartmentsForSale {
  apartments = [
    { name: 'דירה 1', price: 1000 },
    { name: 'דירה 2', price: 1500 },
    { name: 'דירה 3', price: 2000 }
  ];

}
