import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.html',
  styleUrl: './signal-demo.css'
})
export class SignalDemoComponent {

  // Example 1 - Creating Signals
  employeeName = signal('Madan');

  employeeCount = signal(1);


  // Example 2 - Updating Signal using set()
  changeEmployee() {

    this.employeeName.set('John');

  }


  // Example 3 - Updating Signal using update()
  increaseEmployeeCount() {

    this.employeeCount.update(
      currentCount => currentCount + 1
    );

  }


  decreaseEmployeeCount() {

    this.employeeCount.update(
      currentCount => currentCount - 1
    );

  }


  resetEmployee() {

    this.employeeName.set('Madan');

    this.employeeCount.set(1);

  }

}