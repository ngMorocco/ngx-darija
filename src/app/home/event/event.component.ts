import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <div class="container">
      <div class="card container">
        <div class="event flex flex-align-top">
          <div class="date">
            <p>Saturday, May 13rd @ 6:00 PM</p>
            <img src="/assets/date-picker.svg" alt="Calendar" />
          </div>
          <div class="description">
            <h2>Signals 🚦</h2>
            <h1> The future of Angular reactivity</h1>
            <p>
              Back again with a new Angular in Darija live session in this one we will be talking about Signals in Angular.
            </p>
            <ul>
              <li>Why do we need Signals?</li>
              <li>Change Detection without Signals</li>
              <li>Reactivity with Signals</li>
              <li>Zonless Angular</li>
              <li>Signals API</li>
              <li>Why not RxJS?</li>
              <li>Interop with RxJS</li>
              <li>Coming features</li>
            </ul>
            <p>We will pick and answer your questions on the fly.</p>
            <p>
              Hosted by
              <a href="//twitter.com/chihabotmani">Chihab Otmani</a> and
              <a href="//twitter.com/elfouih">Ilyass Elfouih</a>
            </p>
            <p>
              RSVP on <a href="https://www.meetup.com/ngmorocco/events/293298157/">Meetup.com.</a>
            </p>
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
