import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRerender]',
  standalone: true
})
export class RerenderDirective {
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appRerender')
  set rerender(_: any) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
