
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyPipePipe } from '../../my-pipe-pipe'; 


@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MyPipePipe],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class CityListComponent {
  
  // משתנה לקליטת החיפוש
  searchWord: string = '';

  // מערך הערים לחיפוש
  cities: string[] = [
    'ירושלים',
    'בני ברק',
    'צפת',
    'טבריה',
    'חיפה',
    'תל אביב',
    'אשדוד',
    'נתניה',
    'פתח תקווה',
    'רחובות'
  ];

  constructor() { }
}




