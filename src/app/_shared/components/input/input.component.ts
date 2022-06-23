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
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { distinctUntilChanged, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-input',
  template: `
    <label>
      <input
        [formControl]="control"
        placeholder="Search Angular In Darija content..."
        title="Search docs"
        type="search"
        class=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="search-icon feather feather-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </label>
  `,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class InputComponent implements OnChanges, OnInit, OnDestroy {
  @Input() value = '';
  @Input() delay = 500;
  @Output() query = new EventEmitter<string>();

  subscription: Subscription = new Subscription();
  control = new FormControl(this.value, {
    nonNullable: true
  });

  ngOnInit() {
    this.subscription.add(
      this.control.valueChanges
        .pipe(
          throttleTime(this.delay, undefined, { trailing: true }),
          distinctUntilChanged()
        )
        .subscribe(query => {
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
