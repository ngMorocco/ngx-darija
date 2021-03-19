import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerStateService {
  constructor(private state: TransferState) {}
  hydrate(key: string) {
    const STATE_KEY_ITEMS = makeStateKey(key);
    return (obs: Observable<any>) => {
      return obs.pipe(
        tap(videos => {
          this.state.set(STATE_KEY_ITEMS, <any>videos);
        }),
        startWith(this.state.get(STATE_KEY_ITEMS, <any>[]))
      );
    };
  }
}
