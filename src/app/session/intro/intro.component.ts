import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionIntroComponent {}
