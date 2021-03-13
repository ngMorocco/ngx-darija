import {Input, NgModule} from '@angular/core';
import {BasicComponent} from './basic/basic.component';
import {CommonModule} from '@angular/common';

const DECLARATIONS = [
  BasicComponent
];

/**
 * This module provides a set of components and directives
 * to display spinners when loading resources
 */
@NgModule({
  imports: [CommonModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS
})
export class SpinnerModule {
}
