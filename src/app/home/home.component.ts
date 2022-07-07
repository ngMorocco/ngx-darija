import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '@core/services/seo.service';
import { NewsletterComponent } from '@shared/components/newsletter/newsletter.component';
import { EventComponent } from './event/event.component';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-home',
  template: `
    <section class="section intro">
      <div class="section--inner container">
        <app-intro></app-intro>
      </div>
      <div class="section__dots-bg dots-bg"></div>
    </section>

    <!--
    <section class="section event">
      <div class="section--inner container">
        <app-event></app-event>
      </div>
    </section>
    -->

    <app-newsletter></app-newsletter>

    <!-- <section class="section numbers">
      <div class="section--inner container flex flex-space-between">
        <div class="card">
          <div class="card__inner">
            <div>
              <h1>14+</h1>
              <p>Episodes</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__inner">
            <div>
              <h1>90+</h1>
              <p>Minutes</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__inner">
            <div>
              <h1>90+</h1>
              <p>Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  `,
  standalone: true,
  imports: [CommonModule, NewsletterComponent, EventComponent, IntroComponent]
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.setText('Angular In Darija');
  }
}
