
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnualSummaryComponent } from './annual-summary/annual-summary.component';
import { CustomerListComponent } from './customer-list/customer-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AnnualSummaryComponent, CustomerListComponent],
  template: `
    <div style="direction: rtl; padding: 40px; font-family: sans-serif;">
      <h1>מערכת ניהול </h1>
      <hr>

      <div *ngIf="loading">
        <p>בודק הרשאות במערכת... ⏳</p>
      </div>

      <div *ngIf="!loading">
        <p>שלום, מחובר בתור: <strong>{{ role }}</strong></p>

        <app-annual-summary *ngIf="role === 'מנהל'"></app-annual-summary>
        <app-customer-list *ngIf="role === 'מזכיר'"></app-customer-list>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  role: string | null = null;
  loading: boolean = true;

  
  async ngOnInit() {
    try {
      this.role = await this.getUserRole();
    } catch (error) {
      console.error("שגיאה בטעינת הרשאה", error);
    } finally {
      this.loading = false;
    }
  }

  
  getUserRole(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
       
        resolve('מנהל'); 
      }, 2500);
    });
  }
}
