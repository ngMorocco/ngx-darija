import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsletterModule } from '@shared/components/newsletter/newsletter.module';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent, EventComponent],
  imports: [CommonModule, HomeRoutingModule, NewsletterModule]
})
export class HomeModule {}
