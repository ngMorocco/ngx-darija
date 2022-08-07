import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  template: `
    <header>
      <div class="border-top"></div>
      <div class="header-inner container flex gap-30">
        <div class="logo">
          <a
            routerLink="/"
            aria-current="page"
            title="Back to home"
            class="logo__link active--exact active"
          >
            <img
              width="40px"
              height="40px"
              src="assets/angular.svg"
              alt="Angular"
            />
            Angular In Darija
          </a>
        </div>
        <nav class="main-nav flex gap-15 flex-fit">
          <a routerLink="/playlist" routerLinkActive="active--exact active">
            <span class="main-nav__label">Playlist</span>
          </a>
          <a
            class="wip"
            routerLink="/blog"
            routerLinkActive="active--exact active"
            ><span class="main-nav__label">Blog</span>
          </a>
          <a
            class="wip"
            routerLink="/news"
            routerLinkActive="active--exact active"
            ><span class="main-nav__label">News</span>
          </a>
          <a
            class="wip"
            routerLink="/tips"
            routerLinkActive="active--exact active"
            ><span class="main-nav__label">Tips</span>
          </a>
          <a
            class="wip"
            routerLink="/about"
            routerLinkActive="active--exact active"
            ><span class="main-nav__label">About</span>
          </a>
        </nav>
        <form
          id="search"
          class="header-search"
          *ngIf="searchComponentClass | async as SearchComponent"
        >
          <ng-template [ngComponentOutlet]="SearchComponent"></ng-template>
        </form>
        <nav class="header-actions flex">
          <a
            class="wip"
            aria-label="YouTube"
            href="//bit.ly/ngDarija"
            rel="noopener noreferrer"
            target="_blank"
            title="Angular In Darija @ GitHub"
          >
            En
          </a>
          <a
            class="wip"
            role="button"
            aria-label="Light mode"
            title="Light mode"
            class="toggle-theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="grey"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-moon"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  `,
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class NavbarComponent implements OnInit {
  searchComponentClass: Promise<typeof SearchComponent> | null = null;
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 440)
      this.searchComponentClass = import('../search/search.component').then(
        m => m.SearchComponent
      );
  }
}
