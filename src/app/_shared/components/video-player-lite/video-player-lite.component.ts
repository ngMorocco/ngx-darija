import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-video-player-lite',
  template: `<lite-youtube [attr.videoid]="videoId"></lite-youtube>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoPlayerLiteComponent implements OnInit {
  @Input() videoId: string | undefined = undefined;

  ngOnInit() {
    import('@justinribeiro/lite-youtube');
  }
}
