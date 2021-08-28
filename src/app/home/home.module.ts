import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, IntroComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
