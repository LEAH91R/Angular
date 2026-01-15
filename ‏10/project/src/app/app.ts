import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityListComponent } from './components/list/list';

@Component({
  selector: 'app-root',
  imports: [CityListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
