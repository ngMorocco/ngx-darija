import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ErrorModule, FooterModule, NavbarModule } from '@shared/components';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule
} from 'ngx-google-analytics';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FooterModule,
    NavbarModule,
    ErrorModule,
    LoadingBarRouterModule,
    MarkdownModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot('G-32WYWRYZQF'),
    NgxGoogleAnalyticsRouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
