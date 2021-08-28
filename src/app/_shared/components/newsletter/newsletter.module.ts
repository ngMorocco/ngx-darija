import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsletterComponent } from './newsletter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NewsletterComponent],
  exports: [NewsletterComponent]
})
export class NewsletterModule {}
