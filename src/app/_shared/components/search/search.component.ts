import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
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
    searchClient: algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76'),
    indexName: 'instant_search',
    routing: true
  };
  public isBrowser = isPlatformBrowser(this.platformId);
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {}

  onSearchHit(hit: SearchHit) {
    this.router.navigate([
      '/sessions/rT0FUs7uUks',
      this.count++ * 200,
      this.count * 300
    ]);
  }
}
