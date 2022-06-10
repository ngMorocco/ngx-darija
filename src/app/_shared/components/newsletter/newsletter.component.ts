import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  template: `
    <section class="section section--secondary">
      <div class="section--inner">
        <div class="container container-md mb">
          <div class="card newsletter">
            <div class="card__inner">
              <p class="mb-half">
                <strong> Subscribe to our Newsletter </strong>
              </p>
              <form
                action="https://dev.us5.list-manage.com/subscribe/post?u=62e7431de269eb6a5e6208192&amp;id=724689fab1"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
                class="newsletter__form validate"
              >
                <div class="flex">
                  <div class="newsletter__field mc-field-group flex-fit">
                    <input
                      type="email"
                      aria-label="Email"
                      placeholder="your@email.com"
                      value=""
                      name="EMAIL"
                      id="mce-EMAIL"
                      class="required email"
                    />
                  </div>
                  <div class="newsletter__button">
                    <button
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      class="button primary"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div id="mce-responses" class="clear">
                    <div
                      id="mce-error-response"
                      class="response"
                      style="display: none"
                    ></div>
                    <div
                      id="mce-success-response"
                      class="response"
                      style="display: none"
                    ></div>
                  </div>
                  <div
                    aria-hidden="true"
                    style="position: absolute; left: -5000px"
                  >
                    <input
                      type="text"
                      name="b_960a357f3405a688ff935a10e_42bbd30818"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                </div>
              </form>
              <div class="border-top"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="section__dots-bg dots-bg"></div>
    </section>
  `,
  styles: [
    `
      .newsletter {
        @media screen and (max-width: 450px) {
          p {
            text-align: center;
          }
          .flex {
            justify-content: center;
          }
        }
        margin: auto;
        &__form {
          margin-bottom: 0;
        }
        &__field {
          margin-right: 15px;
          min-width: 200px;
          margin-bottom: 1rem;
          @media screen and (max-width: 400px) {
            margin-right: 0px;
          }
        }
        &__button {
          margin-bottom: 1rem;
        }

        p {
          margin-bottom: 0.5rem;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class NewsletterComponent {}
