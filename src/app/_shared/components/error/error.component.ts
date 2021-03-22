import { Component, Input } from '@angular/core';

export type ErrorType = 'not-found' | 'something-went-wrong';

@Component({
  selector: 'app-ui-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  @Input() errorType!: ErrorType;
  @Input() errorTitle?: string;
  @Input() errorSubtitle?: string;
  @Input() errorActionLabel?: string;
  @Input() errorActionRouterLink?: string;
}
