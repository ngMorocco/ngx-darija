import { Component, Input, OnInit } from '@angular/core';
import { YtVideoItem } from 'src/app/_core/models/models';

@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.scss'],
})
export class VideoBannerComponent implements OnInit {
  @Input() ytVideo: YtVideoItem | null = null;

  constructor() {}

  ngOnInit(): void {}
}
