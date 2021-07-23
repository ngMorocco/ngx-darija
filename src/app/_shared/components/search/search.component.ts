import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl();
  data$: Observable<string[]>;

  constructor() {
    this.data$ = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(() => of(['Episode 1', 'Episode 2', 'Episode 3'])),
      startWith([])
    );
  }

  ngOnInit(): void {}
}
