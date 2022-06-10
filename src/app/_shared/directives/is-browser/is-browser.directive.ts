import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appIsBrowser]',
  standalone: true
})
export class IsBrowserDirective implements OnInit {
  @Input() appIsBrowser: boolean | string = true;
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit(): void {
    const isBrowserTest = this.appIsBrowser === '' ? true : this.appIsBrowser;
    if (isPlatformBrowser(this.platformId) === isBrowserTest) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
