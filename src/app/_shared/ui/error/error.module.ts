import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorComponent} from './error.component';

const DECLARATIONS = [
  ErrorComponent
];

/**
 * This module provides a set of components and directives
 * to render nice error content when needed
 */
@NgModule({
  imports: [CommonModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS
})
export class ErrorModule {
}
