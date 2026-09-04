import {
  ChangeDetectorRef,
  Component,
  signal
} from '@angular/core';

@Component({
  selector: 'app-zoneless-demo',
  imports: [],
  templateUrl: './zoneless-demo.html',
  styleUrl: './zoneless-demo.css'
})
export class ZonelessDemoComponent {

  // -----------------------------------
  // Example 1 - Normal Property
  // -----------------------------------

  normalStatus = 'Not Started';

  constructor(private cdr: ChangeDetectorRef) {
  }


  processNormalProperty() {

    this.normalStatus = 'Processing...';

    setTimeout(() => {

      this.normalStatus = 'Completed';

      // Explicitly notify Angular
      this.cdr.markForCheck();

      console.log(
        'Normal property completed'
      );

    }, 2000);

  }


  // -----------------------------------
  // Example 2 - Signal
  // -----------------------------------

  signalStatus = signal('Not Started');


  processSignal() {

    this.signalStatus.set('Processing...');

    setTimeout(() => {

      this.signalStatus.set('Completed');

      console.log(
        'Signal completed'
      );

      // No markForCheck() required

    }, 2000);

  }


  reset() {

    this.normalStatus = 'Not Started';

    this.signalStatus.set('Not Started');

  }

}