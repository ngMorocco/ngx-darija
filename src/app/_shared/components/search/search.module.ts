import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';

import { SearchComponent } from './search.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { InputModule } from '../input/input.module';

@NgModule({
  imports: [CommonModule, RouterModule, InputModule, NgAisModule.forRoot()],
  declarations: [SearchComponent, SearchWidgetComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
