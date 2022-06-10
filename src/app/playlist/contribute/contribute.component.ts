import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ContributeComponent {}
