import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-intro',
  template: `
    <div class="container intro flex flex-space-between">
      <div class="intro__lead">
        <h1 class="intro__title">Angular In Darija</h1>
        <p class="intro__text">Live, hands-on learning in Moroccan Darija</p>
        <div class="intro__links">
          <a routerLink="/playlist" class="button primary button--large">
            Watch
          </a>
        </div>
      </div>
      <img
        class="image"
        width="700px"
        height="394px"
        src="assets/undraw.svg"
        alt="Hero Image Commit Wall"
      />
    </div>
  `,
  styles: [
    `
      .intro {
        img {
          height: auto;
        }
        &.container {
          @media screen and (max-width: 1220px) {
            text-align: center;
            justify-content: center;
          }
        }
        &__title {
          font-size: 2.5rem;
          font-weight: 600;
          @media screen and (max-width: 850px) {
            & {
              font-size: 2rem;
            }
          }
        }
        &__links {
          margin-top: 40px;
        }

        &__lead {
          margin: 20px;
          max-width: 650px;
          font-size: 1.3rem;
          @media screen and (max-width: 850px) {
            & {
              font-size: 1rem;
            }
          }
        }
        &__info {
          font-size: 0.9rem;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule]
})
export class IntroComponent {}
