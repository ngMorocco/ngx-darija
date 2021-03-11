import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './_shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ServerTransferStateModule } from '@angular/platform-server';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
