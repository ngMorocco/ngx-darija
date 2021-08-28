import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsletterModule } from '@shared/components/newsletter/newsletter.module';

@NgModule({
  declarations: [HomeComponent, IntroComponent],
  imports: [CommonModule, HomeRoutingModule, NewsletterModule]
})
export class HomeModule {}
