import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-default-child',
  imports: [],
  templateUrl: './default-child.html',
  styleUrl: './default-child.css',

  // Angular 22: use Eager for the old Default / CheckAlways behavior
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class DefaultChild implements DoCheck {
  @Input() employee!: {
    name: string;
    department: string;
  };

  ngDoCheck(): void {
    console.log('Eager Child Checked');
  }
}