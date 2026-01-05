import { Routes } from '@angular/router';
import { ApartmentsForRent } from './apartments-for-rent/apartments-for-rent';
import { ApartmentsForSale } from './apartments-for-sale/apartments-for-sale';
import { Office } from './office/office';
import { VacationApartments } from './vacation-apartments/vacation-apartments';

export const routes: Routes = [
  { path: '', redirectTo: '/apartments-for-rent', pathMatch: 'full' },
  { path: 'apartments-for-rent', component: ApartmentsForRent },
  { path: 'apartments-for-sale', component: ApartmentsForSale },
  { path: 'office', component: Office },
  { path: 'vacation-apartments', component: VacationApartments }
];
