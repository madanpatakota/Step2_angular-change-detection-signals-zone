import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-demo',
  imports: [],
  templateUrl: './change-detection-demo.html',
  styleUrl: './change-detection-demo.css'
})
export class ChangeDetectionDemoComponent {

  employeeName = 'Madan';

  employeeStatus = 'Active';

  currentTime = new Date();


  changeEmployee() {
    this.employeeName = 'John';
  }


  changeStatus() {
    this.employeeStatus = 'Inactive';
  }


  startTimer() {

    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

  }

}