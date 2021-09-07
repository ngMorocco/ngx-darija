import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RerenderDirective } from './rerender.directive';

@NgModule({
  declarations: [RerenderDirective],
  imports: [CommonModule],
  exports: [RerenderDirective]
})
export class RerenderModule {}
