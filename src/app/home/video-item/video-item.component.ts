import { Component, Input, OnInit } from '@angular/core';
import { YtVideoItem } from 'src/app/_core/models/models';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss']
})
export class VideoItemComponent implements OnInit {

  @Input() ytVideo: YtVideoItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
