import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerStateService {
  constructor(private state: TransferState) {}
  hydrate<T>(key: string, obs$: Observable<T>, defaultValue: T): Observable<T> {
    const STATE_KEY_ITEMS = makeStateKey<T>(key);
    return this.state.hasKey(STATE_KEY_ITEMS)
      ? of(this.state.get<T>(STATE_KEY_ITEMS, defaultValue))
      : obs$.pipe(
          tap(videos => {
            this.state.set(STATE_KEY_ITEMS, videos);
          })
        );
  }
}
