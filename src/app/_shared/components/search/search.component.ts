import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { timeToSeconds } from '@helpers/time';
import { InputComponent } from '../input/input.component';
import { SearchHit, SearchWidgetComponent } from './search-widget.component';

@Component({
  selector: 'app-search',
  template: `
      <app-search-widget (searchHit)="onSearchHit($event)"></app-search-widget>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    InputComponent,
    SearchWidgetComponent
  ]
})
export class SearchComponent {
  public isBrowser = isPlatformBrowser(this.platformId as object);
  constructor(
    @Inject(PLATFORM_ID) private platformId: unknown,
    private router: Router
  ) { }

  onSearchHit(hit: SearchHit) {
    this.router.navigate([`/playlist/${hit.session.videoId}`], {
      queryParams: {
        start: timeToSeconds(hit.start),
        end: timeToSeconds(hit.end),
        ts: new Date().getTime()
      }
    });
  }
}
