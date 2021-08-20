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
import {
  debounceTime,
  distinctUntilChanged,
  Subscription,
  tap,
  throttleTime
} from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnChanges, OnInit, OnDestroy {
  @Input() value = '';
  @Input() delay = 500;
  @Output() query = new EventEmitter<string>();

  subscription: Subscription = new Subscription();
  control: FormControl = new FormControl(this.value);

  ngOnInit() {
    this.subscription.add(
      this.control.valueChanges
        .pipe(
          throttleTime(this.delay, undefined, { trailing: true }),
          distinctUntilChanged()
        )
        .subscribe((query: string) => {
          this.query.emit(query);
        })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const { value } = changes;
    if (value && !value.currentValue) {
      this.control.setValue(value.currentValue);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
