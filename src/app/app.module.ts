import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, BrowserModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
