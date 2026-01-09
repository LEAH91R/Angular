import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.css']
})
export class RegistrationComponent {
  userName: string = '';
  userEmail: string = '';
  userPhone: string = '';

  constructor(private router: Router) {}

  onSend() {
    if (!this.userName || !this.userEmail || !this.userPhone) {
      alert('נא למלא שם, אימייל וטלפון');
      return;
    }

    this.router.navigate(['/success', this.userName], {
      queryParams: { email: this.userEmail, phone: this.userPhone }
    });
  }
}