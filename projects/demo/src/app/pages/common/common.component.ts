import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@elementar/components/layout';
import { LayoutBodyComponent } from '@elementar/components/layout';
import { LayoutSidebarComponent } from '@elementar/components/layout';
import { LayoutHeaderComponent } from '@elementar/components/layout';
import { HeaderComponent } from '@demo/app/header/header.component';
import { SidebarComponent } from '@demo/app/sidebar/sidebar.component';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
    LayoutBodyComponent,
    LayoutSidebarComponent,
    LayoutHeaderComponent,
  ],
  templateUrl: './common.component.html'
})
export class CommonComponent {

}
