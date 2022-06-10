import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export type ErrorType = 'not-found' | 'something-went-wrong';

@Component({
  selector: 'app-ui-error',
  template: ` <div *ngIf="errorType === 'something-went-wrong'">
      <img src="assets/undraw_bug_fixing.svg" alt="Person fixing bugs" />
      <h2>Aaaaah! Something went wrong</h2>
      <p>
        Brace yourself till we get the error fixed.<br />
        You may also refresh the page or try again later.
      </p>
    </div>

    <div *ngIf="errorType === 'not-found'">
      <img src="assets/undraw_page_not_found.svg" alt="Page not found" />
      <h2 *ngIf="errorTitle">{{ errorTitle }}</h2>
      <p *ngIf="errorSubtitle">
        {{ errorSubtitle }}
      </p>
      <a
        *ngIf="errorActionLabel && errorActionRouterLink"
        [routerLink]="errorActionRouterLink"
      >
        {{ errorActionLabel }}</a
      >
    </div>`,
  standalone: true,
  imports: [RouterModule]
})
export class ErrorComponent {
  @Input() errorType!: ErrorType;
  @Input() errorTitle?: string;
  @Input() errorSubtitle?: string;
  @Input() errorActionLabel?: string;
  @Input() errorActionRouterLink?: string;
}
