import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VideoItem } from '@core/models';
import { SeoService } from '@core/services/seo.service';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PlaylistComponent implements OnInit {
  playlist$: Observable<VideoItem[]> = EMPTY;

  constructor(private route: ActivatedRoute, private seo: SeoService) {
    this.playlist$ = this.route.data.pipe(map(data => data.videos));
  }

  ngOnInit() {
    this.seo.setText('Angular In Darija Playlist');
  }
}
