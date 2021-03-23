import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerStateService {
  constructor(private state: TransferState) {}
  hydrate(key: string): MonoTypeOperatorFunction<any> {
    const STATE_KEY_ITEMS = makeStateKey(key);
    return (obs: Observable<any>) =>
      obs.pipe(
        tap(videos => {
          this.state.set(STATE_KEY_ITEMS, videos);
        }),
        startWith(this.state.get(STATE_KEY_ITEMS, [] as any))
      );
  }
}
