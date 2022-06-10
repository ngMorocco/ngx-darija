import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  template: `
    <ngx-loading-bar [includeBar]="false" [color]="'#e62424'"></ngx-loading-bar>
    <app-navbar></app-navbar>
    <div class="flex viewport">
      <div>
        <router-outlet></router-outlet>
      </div>
      <div>
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styles: [
    `
      .viewport {
        flex-direction: row;
        justify-content: center;
        align-content: space-between;
        height: calc(100vh - 59px);
        @media screen and (max-width: 840px) {
          height: calc(100vh - 107px);
        }
        > div {
          width: 100%;
        }
      }
    `
  ],
  standalone: true,
  imports: [FooterComponent, RouterModule, NavbarComponent, LoadingBarModule]
})
export class AppComponent {}
