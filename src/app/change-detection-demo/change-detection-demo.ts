import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-demo',
  imports: [],
  templateUrl: './change-detection-demo.html',
  styleUrl: './change-detection-demo.css'
})
export class ChangeDetectionDemoComponent {

  constructor( private cdr: ChangeDetectorRef){
    
  }

  employeeName = 'Madan';

  employeeStatus = 'Active';

  currentTime : any= new Date();


  changeEmployee() {
    this.employeeName = 'John';
  }


  changeStatus() {
    this.employeeStatus = 'Inactive';
  }


  startTimer() {

    this.currentTime = "No vlaue";
    
    setInterval(() => {
      this.currentTime = new Date();
      this.cdr.markForCheck();
    }, 1000);

  }

}