import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';
import { SearchComponent } from './search.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { SearchHitsComponent } from './search-hits/search-hits.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgAisModule.forRoot()
  ],
  declarations: [
    SearchComponent,
    SearchInputComponent,
    SearchWidgetComponent,
    SearchHitsComponent
  ],
  exports: [SearchComponent]
})
export class SearchModule {}
