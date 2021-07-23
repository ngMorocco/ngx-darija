import { Component, AfterViewInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearchConfig } from 'angular-instantsearch/instantsearch/instantsearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  config: InstantSearchConfig = {
    searchClient: algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76'),
    indexName: 'instant_search',
    routing: true
  };
  resultsContainer: any = null;
  header: any = undefined;

  onKeyUp = (event: any) => {
    if (event.key !== 'Escape') {
      return;
    }
    this.closeFilters();
  };

  onClick = (event: any) => {
    if (event.target !== this.header) {
      return;
    }
    this.closeFilters();
  };

  ngAfterViewInit() {
    this.resultsContainer = document.querySelector('.container-results');
    this.header = document.querySelector('#header');
  }

  public openFilters() {
    document.body.classList.add('filtering');
    window.scrollTo(0, 0);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('click', this.onClick);
  }

  public closeFilters() {
    document.body.classList.remove('filtering');
    this.resultsContainer?.scrollIntoView();
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('click', this.onClick);
  }
}
