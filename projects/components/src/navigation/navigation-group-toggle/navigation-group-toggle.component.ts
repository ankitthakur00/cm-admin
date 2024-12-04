import { Component, HostListener, inject, Input, contentChild, TemplateRef } from '@angular/core';
import { NavigationApiService } from '../navigation-api.service';
import { NavigationGroupToggleIconDirective } from '../navigation-group-toggle-icon.directive';
import { MatRipple } from '@angular/material/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'emr-navigation-group-toggle',
    exportAs: 'emrNavigationGroupToggle',
    templateUrl: './navigation-group-toggle.component.html',
    styleUrls: ['./navigation-group-toggle.component.scss'],
    hostDirectives: [
        MatRipple
    ],
    host: {
        class: 'emr-navigation-group-toggle',
        '[class.is-active]': 'active'
    },
    imports: [NgTemplateOutlet]
})
export class NavigationGroupToggleComponent {
  readonly api = inject(NavigationApiService);

  readonly iconRef = contentChild(NavigationGroupToggleIconDirective);

  @Input()
  for!: any;

  get active(): boolean {
    return this.api.isGroupActive(this.for);
  }

  @HostListener('click', ['$event'])
  toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.api.toggleGroup(this.for);
  }

  protected get iconRefTemplate(): TemplateRef<any> {
    return this.iconRef()?.templateRef as TemplateRef<any>;
  }
}
