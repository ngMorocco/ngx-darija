import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule {}
