import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { SuccessComponent } from './components/success/success.component';
import { ApartmentsForSaleComponent } from './components/apartments-for-sale/apartments-for-sale';
import { ApartmentsForRent } from './components/apartments-for-rent/apartments-for-rent.component';
import { VacationApartmentsComponent } from './components/vacation-apartments/vacation-apartments';

export const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'success/:name', component: SuccessComponent },
  { path: 'for-sale', component: ApartmentsForSaleComponent },
  { path: 'for-rent', component: ApartmentsForRent },
  { path: 'vacation', component: VacationApartmentsComponent }
];