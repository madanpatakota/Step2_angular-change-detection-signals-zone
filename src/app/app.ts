import { Component } from '@angular/core';
import { ChangeDetectionDemoComponent } from './change-detection-demo/change-detection-demo';


@Component({
  selector: 'app-root',
  imports: [ChangeDetectionDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}