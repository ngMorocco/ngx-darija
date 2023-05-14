import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <div class="container">
      <div class="card container">
        <div class="event flex flex-align-top">
          <div class="date">
            <p>Saturday, May 27nd @ 6:00 PM</p>
            <img src="/assets/date-picker.svg" alt="Calendar" />
          </div>
          <div class="description">
            <h2>Angular v16 new features</h2>
            <h1>Live update of AngularInDarija.dev</h1>
            <p>Back with a new live session of Angular in Darija. In this session, we will update the angularindarija.dev site with the latest Angular 16 features.</p>
            <ul>
              <li>Upgrade to Angular 16</li>
              <li>Use self-closing tags</li>
              <li>Bind route parameters to Component's input</li>
              <li>Use experimental Signals API</li>
              <li>Setup non-destructive hydration</li>
              <li>Setup experimental Jest</li>
              <li>Bonus: Setup experimental esbuild builder</li>
            </ul>
            <p>We will pick and answer your questions on the fly.</p>
            <p>
              Hosted by
              <a href="//twitter.com/chihabotmani">Chihab Otmani</a> and
              <a href="//twitter.com/elfouih">Ilyass Elfouih</a>
            </p>
            <!-- <p>
              RSVP on <a href="https://www.meetup.com/ngmorocco/events/293298157/">Meetup.com.</a>
            </p> -->
          </div>
        </div>
        <div class="border-top"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .event {
        justify-content: space-around;
      }

      .date {
        flex: 0.4;
        margin-top: 10px;
        padding: 10px;
        min-width: 250px;
        svg {
          width: 100%;
        }
        @media screen and (max-width: 1180px) {
          flex: 1;
          order: 1;
        }
      }

      .description {
        max-width: 600px;
        flex: 0.6;
        @media screen and (max-width: 1180px) {
          flex: 1;
        }
        padding: 10px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class EventComponent { }
