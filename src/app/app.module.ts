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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
    NgxGoogleAnalyticsRouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
