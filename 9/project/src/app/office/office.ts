import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-office',
  imports: [CommonModule],
  templateUrl: './office.html',
  styleUrl: './office.css',
})
export class Office {
  apartments = [
    { name: 'דירה 1', price: 1000 },
    { name: 'דירה 2', price: 1500 },
    { name: 'דירה 3', price: 2000 }
  ];
}
