import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { modules } from './app/app.modules';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(modules)]
  }).catch(console.error);
});
