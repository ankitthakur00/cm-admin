import { Component, HostListener, inject, input } from '@angular/core';
import { RAIL_NAV, RailNavComponent } from '@elementar/components/rail-nav/types';
import { v7 as uuid } from 'uuid';

@Component({
    selector: 'emr-rail-nav-item,[emr-rail-nav-item]',
    exportAs: 'emrRailNavItem',
    imports: [],
    templateUrl: './rail-nav-item.component.html',
    styleUrl: './rail-nav-item.component.scss',
    host: {
        'class': 'emr-rail-nav-item',
        '[class.is-active]': 'isActive',
    }
})
export class RailNavItemComponent {
  protected _railNav = inject<RailNavComponent>(RAIL_NAV);

  key = input(uuid());

  get isActive(): boolean {
    if (!this.key() || !this._railNav.api.getActiveKey()) {
      return false;
    }

    return this._railNav.api.isActive(this.key());
  }

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    if (!this.key()) {
      return;
    }

    this._railNav.api.activateItem(this.key());
  }
}
