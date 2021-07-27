import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PopoverComponent],
  exports: [PopoverComponent]
})
export class PopoverModule {}
