import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YtVideoDetail } from '@core/models';
import { SeoService } from '@ngaox/seo';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SessionComponent implements OnInit {
  videoDetail$: Observable<YtVideoDetail | null> = EMPTY;
  errorLoadingYoutubeVideo = false;

  constructor(
    private route: ActivatedRoute,seo: SeoService
  ) {
    // twitter is weird
    seo.generateTags([
      { name: "twitter:card", content: "summary_large_image" }
    ]);
  }

  ngOnInit(): void {
    this.videoDetail$ = this.route.data.pipe(
      map(data => {
        if (!data["session"]) {
          this.errorLoadingYoutubeVideo = true;
        }
        return data["session"];
      })
    );
  }
}
