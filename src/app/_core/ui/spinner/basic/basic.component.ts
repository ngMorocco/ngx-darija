import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ui-spinner-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  /**
   * When set to true spinner will be centered in the middle of it's parent container
   * Defaults to `true`
   */
  @Input() centered = true;
}
