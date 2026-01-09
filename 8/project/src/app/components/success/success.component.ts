import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.html',
  styleUrls: ['./success.css']
})
export class SuccessComponent implements OnInit {
  userName: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('name');
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}