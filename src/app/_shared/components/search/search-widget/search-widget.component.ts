import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
import { EMPTY, map, Observable } from 'rxjs';

export interface SearchHit {
  route: string;
}

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchWidgetComponent
  extends BaseWidget
  implements OnInit, OnDestroy {
  @Output() searchHit = new EventEmitter<SearchHit>();
  parentIndex: any;
  results$: Observable<any> = EMPTY;
  state: {
    query: string;
    refine: (value: string) => void;
  } = { query: '', refine: () => {} };
  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('SearchBox');
    this.createWidget(connectSearchBox as any, {});
  }

  ngOnInit() {
    super.ngOnInit();
    this.results$ = this.instantSearchInstance.change.pipe(
      map(({ results }) => results)
    );
  }

  onQuery(query: string) {
    this.state.refine(query);
  }

  onSearchHit(hit: any) {
    this.searchHit.emit({ route: hit.url });
  }
}
