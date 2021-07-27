import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { timeToSeconds } from '@helpers/time';
import algoliasearch from 'algoliasearch/lite';

import { SearchHit } from './search-widget/search-widget.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  count = 0;
  config: any = {
    searchClient: algoliasearch(
      'GSQOLW7GQF',
      '264f94ff8f90757b95530f094904563e'
    ),
    indexName: 'ngx-darija',
    routing: false
  };
  public isBrowser = isPlatformBrowser(this.platformId);
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {}

  onSearchHit(hit: SearchHit) {
    this.router.navigate([`/sessions/${hit.session.videoId}`], {
      queryParams: {
        start: timeToSeconds(hit.start),
        end: timeToSeconds(hit.end)
      }
    });
  }
}
