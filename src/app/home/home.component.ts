import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeVideos } from '@core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  ytVideos$: Observable<HomeVideos>;

  constructor(private route: ActivatedRoute) {
    this.ytVideos$ = this.route.data.pipe(map(data => data['ytVideos']));
  }
}
