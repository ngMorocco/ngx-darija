import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { ErrorModule, FooterModule, NavbarModule } from '@shared/components';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    MarkdownModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
