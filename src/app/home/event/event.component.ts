import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
    <div class="container">
      <div class="card container">
        <div class="event flex flex-align-top">
          <div class="date">
            <p>Saturday, July 2nd @ 6:30 PM</p>
            <img src="/assets/date-picker.svg" alt="Calendar" />
          </div>
          <div class="description">
            <h2>Standalone Components</h2>
            <p>
              We are back with a new episode about the long-awaited "Standalone
              components" feature available in v14!
            </p>
            <ul>
              <li>Why do/did we need NgModules again?</li>
              <li>What are Standalone Components?</li>
              <li>How to provide services?</li>
              <li>How to use with third party libraries?</li>
              <li>Single File Components</li>
              <li>What are the best strategies to migrate?</li>
              <li>Angular In Darija app migration to SC</li>
              <li>Are Standalone APIs ready for production?</li>
              <li>What is the Future?</li>
            </ul>
            <p>We will pick and answer your questions on the fly.</p>
            <p>
              Hosted by
              <a href="//twitter.com/chihabotmani">Chihab Otmani</a> and
              <a href="//twitter.com/elfouih">Ilyass Elfouih</a>
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
export class EventComponent {}
