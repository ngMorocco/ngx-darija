import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent implements OnChanges, OnInit, OnDestroy {
  @Input() value = '';
  @Input() debounce = 500;
  @Output() query = new EventEmitter<string>();

  subscription: Subscription = new Subscription();
  searchCtrl: FormControl = new FormControl(this.value);
  ngOnInit() {
    this.subscription.add(
      this.searchCtrl.valueChanges
        .pipe(debounceTime(this.debounce), distinctUntilChanged())
        .subscribe((query: string) => this.query.emit(query))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const { value } = changes;
    if (value) {
      this.searchCtrl.setValue(value.currentValue);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
