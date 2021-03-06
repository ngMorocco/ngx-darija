import { Component, Input, OnInit } from '@angular/core';
import { YtVideoItem } from 'src/app/_core/models/models';

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  styleUrls: ['./video-listing.component.scss']
})
export class VideoListingComponent implements OnInit {

  @Input() ytVideos: YtVideoItem[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
