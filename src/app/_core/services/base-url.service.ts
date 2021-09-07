import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isPlatformServer(): boolean {
    return isPlatformServer(this.platformId);
  }
  isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
  get(): string {
    return `${
      this.isPlatformBrowser() ? '' : environment.baseUrl
    }/.netlify/functions`;
  }
}
