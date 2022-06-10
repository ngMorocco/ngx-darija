import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { timeToSeconds } from '@helpers/time';
import algoliasearch from 'algoliasearch/lite';
import { NgAisModule } from 'angular-instantsearch';
import { environment } from 'src/environments/environment';
import { InputComponent } from '../input/input.component';
import { SearchHit, SearchWidgetComponent } from './search-widget.component';

@Component({
  selector: 'app-search',
  template: `
    <ais-instantsearch *ngIf="isBrowser" [config]="config">
      <ais-configure
        [searchParameters]="{
          attributesToSnippet: ['description:10'],
          snippetEllipsisText: '…',
          removeWordsIfNoResults: 'allOptional'
        }"
      >
      </ais-configure>
      <app-search-widget (searchHit)="onSearchHit($event)"></app-search-widget>
    </ais-instantsearch>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    InputComponent,
    SearchWidgetComponent,
    NgAisModule
  ]
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
    this.router.navigate([`/playlist/${hit.session.videoId}`], {
      queryParams: {
        start: timeToSeconds(hit.start),
        end: timeToSeconds(hit.end),
        ts: new Date().getTime()
      }
    });
  }
}
