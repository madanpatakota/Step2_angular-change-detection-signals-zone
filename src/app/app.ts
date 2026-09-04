import { Component } from '@angular/core';
import { ZoneDemoComponent } from './zone-demo/zone-demo';


@Component({
  selector: 'app-root',
  imports: [ZoneDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}