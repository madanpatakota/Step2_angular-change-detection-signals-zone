import { Component } from '@angular/core';
import { SignalDemoComponent } from './signal-demo/signal-demo';

@Component({
  selector: 'app-root',
  imports: [SignalDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}