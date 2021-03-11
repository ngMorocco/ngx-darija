import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { YtVideoItem } from 'src/app/_core/models/models';

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  styleUrls: ['./video-listing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoListingComponent implements OnInit {

  @Input() ytVideos: YtVideoItem[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
