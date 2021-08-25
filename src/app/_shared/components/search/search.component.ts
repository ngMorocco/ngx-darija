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
import { environment } from 'src/environments/environment';
import { SearchHit } from './search-widget/search-widget.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  config: any = {
    searchClient: algoliasearch(
      environment.algolia.appId,
      environment.algolia.apiKey
    ),
    indexName: environment.algolia.indexName,
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
