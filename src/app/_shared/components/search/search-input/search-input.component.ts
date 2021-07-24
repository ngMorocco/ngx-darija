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
  @Output() query = new EventEmitter<string>();
  subscription: Subscription = new Subscription();
  searchCtrl: FormControl = new FormControl(this.value);
  ngOnInit() {
    console.log(this.value);
    this.subscription.add(
      this.searchCtrl.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((query: string) => this.query.emit(query))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const { value } = changes;
    if (value && value.currentValue) {
      this.searchCtrl.setValue(value.currentValue);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
