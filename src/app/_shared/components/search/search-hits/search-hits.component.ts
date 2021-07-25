import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  ContentChild,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-search-hits',
  templateUrl: './search-hits.component.html',
  styleUrls: ['./search-hits.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHitsComponent {
  @Input() hits: any[] = [];
  @Output() searchHit = new EventEmitter<any>();
  // @ts-ignore
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;

  onSearchHit(hit: any) {
    this.searchHit.emit(hit);
  }
}
