import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewEncapsulation
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
  @Input() display = false;
  // @ts-ignore
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;
}
