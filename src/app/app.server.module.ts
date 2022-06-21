import { NgModule } from '@angular/core';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { AppComponent } from './app.component';
import { modules } from './app.modules';

@NgModule({
  imports: [AppComponent, ...modules, ServerModule, ServerTransferStateModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
