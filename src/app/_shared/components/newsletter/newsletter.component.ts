import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
