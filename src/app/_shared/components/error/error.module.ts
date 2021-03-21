import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import {RouterModule} from '@angular/router';

const DECLARATIONS = [ErrorComponent];

/**
 * This module provides a set of components and directives
 * to render nice error content when needed
 */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS
})
export class ErrorModule {}
