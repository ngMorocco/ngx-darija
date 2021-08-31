import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  version = process.env.NG_APP_VERSION || 'v1.0';
  sha1 = process.env.NG_APP_COMMIT_REF || 'xxx';
}
