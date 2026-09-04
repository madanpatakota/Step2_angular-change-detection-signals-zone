import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-zone-demo',
  imports: [],
  templateUrl: './zone-demo.html',
  styleUrl: './zone-demo.css'
})
export class ZoneDemoComponent {

  status = 'Not Started';

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  processInsideAngular() {

  this.status = 'Processing...';

  setTimeout(() => {

    this.status = 'Completed';

    this.cdr.markForCheck();
    //Angular, this component's data may have changed. Please check this component when change detection runs

    console.log('Completed inside Angular');

  }, 2000);

}


  processOutsideAngular() {

  this.status = 'Processing...';

    this.ngZone.runOutsideAngular(() => {

      setTimeout(() => {

        this.status = 'Completed';

        //this.cdr.markForCheck();

        console.log("completed outside of Angular")

      }, 2000);

    });

  }

}