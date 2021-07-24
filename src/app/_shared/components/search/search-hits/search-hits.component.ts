import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-search-hits',
  templateUrl: './search-hits.component.html',
  styleUrls: ['./search-hits.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHitsComponent implements OnInit {
  @Input() hits: any[] = [];
  @Output() searchHit = new EventEmitter<any>();

  show = true;

  constructor() {}

  ngOnInit(): void {}

  onSearchHit(hit: any) {
    this.searchHit.emit(hit);
  }
}
