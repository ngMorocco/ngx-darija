import { HttpClientModule } from '@angular/common/http';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { NgAisModule } from 'angular-instantsearch';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule
} from 'ngx-google-analytics';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

export const modules = [
  BrowserTransferStateModule,
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  AppRoutingModule,
  HttpClientModule,
  LoadingBarRouterModule,
  MarkdownModule.forRoot(),
  NgxGoogleAnalyticsModule.forRoot('G-32WYWRYZQF'),
  NgxGoogleAnalyticsRouterModule,
  ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: environment.production,
    // Register the ServiceWorker as soon as the app is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  }),
  NgAisModule.forRoot()
];
