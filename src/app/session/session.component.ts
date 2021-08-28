import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '@core/models';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent {
  playlist$: Observable<VideoItem[]> = EMPTY;

  constructor(private route: ActivatedRoute) {
    this.playlist$ = this.route.data.pipe(map(data => data.videos));
  }
}
