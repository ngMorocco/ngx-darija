import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
    `
      label {
        display: flex;
        align-items: center;

        input {
          padding-right: 2rem;
        }

        .search-icon {
          margin-left: -1.66rem;
          width: 1rem;
          pointer-events: none;
          opacity: 0.6;
        }
      }
    `
  ],
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
