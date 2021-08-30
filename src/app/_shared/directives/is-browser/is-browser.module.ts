import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsBrowserDirective } from './is-browser.directive';

@NgModule({
  declarations: [IsBrowserDirective],
  imports: [CommonModule],
  exports: [IsBrowserDirective]
})
export class IsBrowserModule {}
